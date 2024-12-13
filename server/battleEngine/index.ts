import {
  BattlePokemon,
  BattleState,
  BattleStatus,
  PokemonType,
  Team,
  Turn,
  TurnType,
  User,
} from "../types";
import {
  getTurnsInOrder,
  isAttackTurn,
  isSwitchTurn,
  titleCaseToUnderscore,
  checkIsBattleOver,
} from "./utils";

import pokemonData from "../data/pokemonData";
import typeAttackChart from "../data/typeAttackChart";
import moves from "../data/moves";
import UserModel from "../models/user.model";

const startBattle = async (player1Id: string, player2Id: string) => {
  try {
    const users: User[] = await UserModel.find({
      _id: { $in: [player1Id, player2Id] },
    });

    const player1 = users[0];
    const player2 = users[1];

    const battleId = [player1Id, player2Id].sort().join("_");
    const battleState = getInitialBattleState(player1, player2, battleId);
    return { battleId, battleState };
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error fetching users:", err.message);
    } else {
      console.error("An unknown error occurred.");
    }
    throw err;
  }
};

const getInitialFullTeamData = (team: Team) =>
  team.map((pokemon, index) => {
    const fullPokemon = pokemonData[pokemon.index - 1];
    return { ...fullPokemon, id: index };
  });

const queueTurn = (battleState: BattleState, turn: Turn) => {
  const newCurrentTurn = battleState.currentTurn.filter(
    (currId) => currId != turn.userId
  );
  return {
    ...battleState,
    queuedTurns: [...battleState.queuedTurns, turn],
    currentTurn: newCurrentTurn,
  };
};

const processTurns = async (battleState: BattleState) => {
  const newBattleState = await handleTurn(
    battleState.queuedTurns[0],
    battleState.queuedTurns[1],
    battleState
  );

  newBattleState.queuedTurns = [];

  return newBattleState;
};

const handleTurn = async (
  firstTurn: Turn,
  secondTurn: Turn,
  battleState: BattleState
) => {
  let newBattleState = battleState;

  if (newBattleState.turnCount > 0 && secondTurn)
    //only want to add the turn header if both players move and its not the first turn
    newBattleState.log.push({
      type: "header",
      text: `Turn ${newBattleState.turnCount}:`,
    });
  const turnsInOrder = getTurnsInOrder(firstTurn, secondTurn);

  for (let index = 0; index < turnsInOrder.length; index++) {
    const turn = turnsInOrder[index];
    const opponentTurn = turnsInOrder[1 - index]; //if this is the second turn then opponent is first and vice versa

    if (isSwitchTurn(turn)) {
      newBattleState = setActivePokemon(
        newBattleState,
        turn.pokemonId,
        turn.userId
      );
      newBattleState.log.push({
        type: "text",
        text: `${
          newBattleState.activePokemon[turn.userId]?.name
        } was sent out to battle.`,
      });
    }

    if (isAttackTurn(turn)) {
      const defender = newBattleState.activePokemon[opponentTurn.userId];
      if (!defender) return newBattleState;

      const { damage, text } = calculateDamage(
        turn.attacker,
        defender,
        turn.move
      );

      defender.currentHp -= damage;

      newBattleState.log.push({
        type: "text",
        text: `${turn.attacker.name} used ${turn.move}.` + text,
      });

      if (defender.currentHp <= 0) {
        newBattleState.teams[opponentTurn.userId].push({
          ...defender,
          currentHp: 0,
        });
        newBattleState.activePokemon[opponentTurn.userId] = null;
        newBattleState.log.push({
          type: "text",
          text: `${defender.name} fainted.`,
        });

        const isBattleOver = checkIsBattleOver(
          newBattleState.teams[opponentTurn.userId]
        );

        if (isBattleOver) {
          await handleBattleOver(opponentTurn.userId, turn.userId);
          newBattleState.currentTurn = [];
          newBattleState.status = BattleStatus.FINISHED;
          newBattleState.text[opponentTurn.userId] = "You lost the battle.";
          newBattleState.text[turn.userId] = "You won the battle!";
          return newBattleState;
        }

        newBattleState.turnType = TurnType.ATTACK;
        newBattleState.currentTurn = [opponentTurn.userId];
        newBattleState.text[opponentTurn.userId] =
          "Choose a pokemon to send into battle";
        newBattleState.text[turn.userId] = "Waiting for opponent...";

        return newBattleState;
      }
    }
  }

  newBattleState.turnCount++;
  newBattleState.text[newBattleState.playerIds[0]] =
    "Choose an attack to use or click on a pokemon on your team to switch.";
  newBattleState.text[newBattleState.playerIds[1]] =
    "Choose an attack to use or click on a pokemon on your team to switch.";
  newBattleState.currentTurn = newBattleState.playerIds;
  newBattleState.turnType = TurnType.ATTACK;

  return newBattleState;
};

const getInitialBattleState = (
  player1: User,
  player2: User,
  battleId: string
) => {
  const fullPlayer1Team = getInitialFullTeamData(player1.team);
  const fullPlayer2Team = getInitialFullTeamData(player2.team);

  return {
    id: battleId,
    teams: { [player1._id]: fullPlayer1Team, [player2._id]: fullPlayer2Team },
    activePokemon: {
      [player1._id]: null,
      [player2._id]: null,
    },
    usernames: {
      [player1._id]: player1.username,
      [player2._id]: player2.username,
    },
    queuedTurns: [],
    playerIds: [player1._id, player2._id],
    currentTurn: [player1._id, player2._id],
    turnType: TurnType.SWITCH,
    status: "in progress",
    turnCount: 0,
    text: {
      [player1._id]: "Choose a pokemon to send into battle",
      [player2._id]: "Choose a pokemon to send into battle",
    },
    log: [],
  };
};

const setActivePokemon = (
  battleState: BattleState,
  newActivePokemonId: number,
  userId: string
) => {
  const newActivePokemonIndex = battleState.teams[userId].findIndex(
    (pokemon) => pokemon.id == newActivePokemonId
  );

  const oldPokemon = battleState.activePokemon[userId];

  const newActivePokemon = battleState.teams[userId][newActivePokemonIndex];
  battleState.activePokemon[userId] = newActivePokemon;
  battleState.teams[userId].splice(newActivePokemonIndex, 1);

  if (oldPokemon) battleState.teams[userId].push(oldPokemon);

  const newCurrentTurn = battleState.currentTurn.filter(
    (currId) => currId !== userId
  );

  return {
    ...battleState,
    currentTurn: newCurrentTurn,
  };
};

const checkAttackHit = (accuracy: number) =>
  Math.floor(Math.random() * 100) + 1 <= accuracy;

const calculateEffectiveness = (
  moveType: PokemonType,
  defenderTypes: PokemonType[]
) => {
  return defenderTypes.reduce((multiplier, type) => {
    return multiplier * (typeAttackChart[moveType]?.[type] ?? 1);
  }, 1);
};

const calculateDamage = (
  attacker: BattlePokemon,
  defender: BattlePokemon,
  movename: string,
  baseLevel = 50
) => {
  const move = moves[titleCaseToUnderscore(movename)];

  let text = "";
  const didAttackHit = checkAttackHit(move.accuracy);

  if (!didAttackHit) {
    return {
      damage: 0,
      text: " The attack missed!",
    };
  }

  const attackStat = move.isPhysical
    ? attacker.stats.attack
    : attacker.stats.specialAttack;
  const defenseStat = move.isPhysical
    ? defender.stats.defense
    : defender.stats.specialDefense;

  const effectiveness = calculateEffectiveness(move.type, defender.types);

  if (effectiveness > 1) text = " It was super effective!";
  else if (effectiveness === 0) text = `It does not affect ${defender.name}.`;
  else if (effectiveness < 1) text = " It was not very effective.";

  const sameTypeAttackBonus = attacker.types.includes(move.type) ? 1.25 : 1;

  const baseDamage =
    (((2 * baseLevel) / 5 + 2) * move.power * (attackStat / defenseStat)) / 50 +
    2;

  return {
    damage: Math.floor(baseDamage * effectiveness * sameTypeAttackBonus),
    text,
  };
};

const handleBattleOver = async (loserId: string, winnerId: string) => {
  try {
    await UserModel.updateOne(
      { _id: winnerId },
      {
        $inc: { wins: 1, battles: 1 },
      }
    );

    const loserUpdate = await UserModel.updateOne(
      { _id: loserId },
      {
        $inc: { losses: 1, battles: 1 },
      }
    );
  } catch (error) {
    console.error("Error updating battle results:", error);
    throw error;
  }
};

export { startBattle, queueTurn, processTurns };
