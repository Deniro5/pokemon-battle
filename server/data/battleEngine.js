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
  team.map((pokemon) => {
    const fullPokemon = pokemonData[pokemon.index - 1];
    return fullPokemon;
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

const handleTurn = (firstTurn, secondTurn, battleState) => {
  let newBattleState = battleState;

  if (firstTurn.turnType === "switch" && secondTurn?.turnType === "switch") {
    newBattleState = setActivePokemon(
      newBattleState,
      firstTurn.pokemon,
      firstTurn.userId
    );
    newBattleState = setActivePokemon(
      newBattleState,
      secondTurn.pokemon,
      secondTurn.userId
    );
    newBattleState.turnType = "attack";
    newBattleState.currentTurn = newBattleState.playerIds;
    newBattleState.text = `${firstTurn.pokemon.name} was sent out to battle. ${secondTurn.pokemon.name} was sent out to battle. \n`;
  }

  if (firstTurn.turnType === "attack" && secondTurn?.turnType === "attack") {
    const firstSpeed = firstTurn.attacker.stats.speed;
    const secondSpeed = secondTurn.attacker.stats.speed;

    if (firstSpeed > secondSpeed) {
      const firstDamage = calculateDamage(
        firstTurn.attacker,
        firstTurn.defender,
        firstTurn.move
      );

      battleState.activePokemon[secondTurn.userId].currentHp -= firstDamage;

      newBattleState.text = `${firstTurn.attacker.name} used ${firstTurn.move}.`;

      if (battleState.activePokemon[secondTurn.userId].currentHp === 0) {
        newBattleState.text += `${firstTurn.defender.name} fainted.`;
        newBattleState.turnType = "switch";
        newBattleState.currentTurn = [secondTurn.userId];
        newBattleState.queuedTurns = [];
        return newBattleState;
      }

      const secondDamage = calculateDamage(
        secondTurn.attacker,
        secondTurn.defender,
        secondTurn.move
      );

      battleState.activePokemon[firstTurn.userId].currentHp -= secondDamage;
      newBattleState.text += `${secondTurn.attacker.name} used ${secondTurn.move}.`;

      if (battleState.activePokemon[firstTurn.userId].currentHp === 0) {
        newBattleState.text += `${secondTurn.defender.name} fainted.`;
        newBattleState.turnType = "switch";
        newBattleState.currentTurn = [firstTurn.userId];
        newBattleState.queuedTurns = [];
        return newBattleState;
      }
    }
  }

  newBattleState.turnCount++;
  newBattleState.text +=
    "\n Choose an attack to use or click on a pokemon on your team to switch.";
  newBattleState.currentTurn = [...newBattleState.playerIds];
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
  };
};

//Each user chooses a pokemon to switch in

const setActivePokemon = (battleState, activePokemon, userId) => {
  //change the active pokemon for the user and end their turn
  const newActivePokemonObj = {
    ...battleState.activePokemon,
    [userId]: activePokemon,
  };

  const newCurrentTurn = battleState.currentTurn.filter(
    (currId) => currId !== userId
  );

  return {
    ...battleState,
    currentTurn: newCurrentTurn,
    activePokemon: newActivePokemonObj,
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

  console.log(effectiveness);

  const sameTypeAttackBonus = attacker.types.includes(move.type) ? 1.25 : 1;

  console.log(sameTypeAttackBonus);

  const baseDamage =
    (((2 * baseLevel) / 5 + 2) * move.power * (attackStat / defenseStat)) / 50 +
    2;

  return Math.floor(baseDamage * effectiveness * sameTypeAttackBonus);
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
