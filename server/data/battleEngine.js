const pokemonData = require("./pokemonData");
const typeAttackChart = require("./typeAttackChart");
const moves = require("./moves");
const User = require("../models/user.model");

//Connect battle (different file)

//Take user teams and return 'battle object'

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

const processTurns = (battleState) => {
  const newBattleState = handleTurn(
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

const handleTurn = (firstTurn, secondTurn, battleState) => {
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
      console.log(turn);
      newBattleState = setActivePokemon(
        newBattleState,
        turn.pokemonId,
        turn.userId
      );
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
        newBattleState.turnType = "switch";
        newBattleState.currentTurn = [opponentTurn.userId];
        newBattleState.queuedTurns = [];
        return newBattleState;
      }
    }
  }

  newBattleState.turnCount++;
  newBattleState.text +=
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
    text: "Choose a pokemon to send into battle",
    log: [],
  };
};

//Each user chooses a pokemon to switch in

const setActivePokemon = (battleState, newActivePokemonId, userId) => {
  //change the active pokemon for the user and end their turn

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

const calculateDamage = (attacker, defender, movename, baseLevel = 50) => {
  const move = moves[titleCaseToUnderscore(movename)];

  const calculateEffectiveness = (moveType, defenderTypes) => {
    return defenderTypes.reduce((multiplier, type) => {
      return multiplier * (typeAttackChart[moveType]?.[type] || 1);
    }, 1);
  };

  const attackStat = move.isPhysical
    ? attacker.stats.attack
    : attacker.stats.specialAttack;
  const defenseStat = move.isPhysical
    ? defender.stats.defense
    : defender.stats.specialDefense;

  const effectiveness = calculateEffectiveness(move.type, defender.types);

  let text = "";
  if (effectiveness > 1) text = " It was super effective!";
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

module.exports = {
  startBattle,
  calculateDamage,
  getInitialFullTeamData,
  getInitialBattleState,
  setActivePokemon,
  queueTurn,
  processTurns,
};
