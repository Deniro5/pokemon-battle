const pokemonData = require("./pokemonData");
const typeAttackChart = require("./typeAttackChart");
const moves = require("./moves");
const User = require("../models/user.model");

const startBattle = async (player1Id, player2Id) => {
  try {
    const users = await User.find({
      _id: { $in: [player1Id, player2Id] },
    });

    const player1 = users[0];
    const player2 = users[1];

    const battleId = [player1Id, player2Id].sort().join("_");
    const battleState = getInitialBattleState(player1, player2, battleId);
    return { battleId, battleState };
  } catch (err) {
    console.error("Error fetching users:", err.message);
    throw err;
  }
};

const getInitialFullTeamData = (team) =>
  team.map((pokemon, index) => {
    const fullPokemon = pokemonData[pokemon.index - 1];
    return { ...fullPokemon, id: index };
  });

const queueTurn = (battleState, turn) => {
  const newCurrentTurn = battleState.currentTurn.filter(
    (currId) => currId != turn.userId
  );
  return {
    ...battleState,
    queuedTurns: [...battleState.queuedTurns, turn],
    currentTurn: newCurrentTurn,
  };
};

const processTurns = async (battleState) => {
  const newBattleState = await handleTurn(
    battleState.queuedTurns[0],
    battleState.queuedTurns[1],
    battleState
  );

  newBattleState.queuedTurns = [];

  return newBattleState;
};

const getTurnsInOrder = (firstTurn, secondTurn) => {
  if (!secondTurn) return [firstTurn];

  const firstSpeed = firstTurn.attacker?.stats?.speed;
  const secondSpeed = secondTurn.attacker?.stats?.speed;

  if (firstTurn.turnType === "switch") return [firstTurn, secondTurn];
  if (secondTurn.turnType === "switch") return [secondTurn, firstTurn];
  return firstSpeed > secondSpeed
    ? [firstTurn, secondTurn]
    : [secondTurn, firstTurn];
};

const handleTurn = async (firstTurn, secondTurn, battleState) => {
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

    if (turn.turnType === "switch") {
      newBattleState = setActivePokemon(
        newBattleState,
        turn.pokemonId,
        turn.userId
      );

      console.log(newBattleState.activePokemon);

      newBattleState.log.push({
        type: "text",
        text: `${
          newBattleState.activePokemon[turn.userId].name
        } was sent out to battle.`,
      });
    }

    if (turn.turnType === "attack") {
      const { damage, text } = calculateDamage(
        turn.attacker,
        turn.defender,
        turn.move
      );

      newBattleState.activePokemon[opponentTurn.userId].currentHp -= damage;

      newBattleState.log.push({
        type: "text",
        text: `${turn.attacker.name} used ${turn.move}.` + text,
      });

      if (newBattleState.activePokemon[opponentTurn.userId].currentHp <= 0) {
        const faintedPokemon =
          newBattleState.activePokemon[opponentTurn.userId];
        newBattleState.teams[opponentTurn.userId].push({
          ...faintedPokemon,
          currentHp: 0,
        });
        newBattleState.activePokemon[opponentTurn.userId] = null;
        newBattleState.log.push({
          type: "text",
          text: `${turn.defender.name} fainted.`,
        });

        const isBattleOver = checkIsBattleOver(
          newBattleState.teams[opponentTurn.userId]
        );

        if (isBattleOver) {
          await handleBattleOver(opponentTurn.userId, turn.userId);
          newBattleState.currentTurn = [];
          newBattleState.status = "finished";
          newBattleState.text[opponentTurn.userId] = "You lost the battle.";
          newBattleState.text[turn.userId] = "You won the battle!";
          return newBattleState;
        }

        newBattleState.turnType = "switch";
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
  newBattleState.turnType = "attack";

  return newBattleState;
};

const getInitialBattleState = (player1, player2, battleId) => {
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
    turnType: "switch",
    status: "in progress",
    turnCount: 0,
    text: {
      [player1._id]: "Choose a pokemon to send into battle",
      [player2._id]: "Choose a pokemon to send into battle",
    },
    log: [],
  };
};

//Each user chooses a pokemon to switch in

const setActivePokemon = (battleState, newActivePokemonId, userId) => {
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

//handle a turn

function titleCaseToUnderscore(input) {
  return input.replace(" ", "_");
}

const checkAttackHit = (accuracy) =>
  Math.floor(Math.random() * 100) + 1 <= accuracy;

const calculateDamage = (attacker, defender, movename, baseLevel = 50) => {
  const move = moves[titleCaseToUnderscore(movename)];

  let text = "";
  const didAttackHit = checkAttackHit(move.accuracy);

  if (!didAttackHit) {
    return {
      damage: 0,
      text: " The attack missed!",
    };
  }

  const calculateEffectiveness = (moveType, defenderTypes) => {
    return defenderTypes.reduce((multiplier, type) => {
      return multiplier * (typeAttackChart[moveType]?.[type] ?? 1);
    }, 1);
  };

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

const checkIsBattleOver = (team) =>
  team.every((pokemon) => pokemon.currentHp <= 0);

const handleBattleOver = async (loserId, winnerId) => {
  try {
    await User.updateOne(
      { _id: winnerId },
      {
        $inc: { wins: 1, battles: 1 },
      }
    );

    const loserUpdate = await User.updateOne(
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

module.exports = {
  startBattle,
  calculateDamage,
  getInitialFullTeamData,
  getInitialBattleState,
  setActivePokemon,
  queueTurn,
  processTurns,
};
