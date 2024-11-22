const pokemonData = require("./pokemonData");
const typeAttackChart = require("./typeAttackChart");
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

    console.log(player1);
    console.log(player2);

    const battleId = [player1Id, player2Id].sort().join("_");
    const battleState = getInitialBattleState(player1, player2);
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

const getInitialBattleState = (player1, player2) => {
  const fullPlayer1Team = getInitialFullTeamData(player1.team);
  const fullPlayer2Team = getInitialFullTeamData(player2.team);

  return {
    teams: { [player1._id]: fullPlayer1Team, [player2._id]: fullPlayer2Team },
    activePokemon: {
      [player1._id]: null,
      [player2._id]: null,
    },
    usernames: {
      [player1._id]: player1.username,
      [player2._id]: player2.username,
    },
    playerIds: [player1._id, player2._id],
    currentTurn: [player1._id, player2._id],
    turnType: "switch",
    status: "in progress",
    text: "Choose a pokemon to send into battle",
  };
};

//Each user chooses a pokemon to switch in

const setActivePokemon = (battleState, activePokemon) => {
  return { ...battleState, activePokemon };
};

//handle a turn

const handleTurn = (userTurn, opponentTurn, battleState) => {
  let battleText = "";
  if (userTurn.type === "switch" && opponentTurn.type === "switch") {
    setUserActivePokemon(battleState, userTurn.newActivePokemon);
    setOpponentActivePokemon(battleState, opponentTurn.newActivePokemon);

    battleText = `You sent ${userTurn.newActivePokemon.name} out to battle. Your opponent sent ${opponentTurn.newActivePokemon.name} out to battle`;
  }

  if (userTurn.type === "switch") {
    markActivePokemon(userTeam, userTurn.pokemon);
    calculateDamage(
      battleState.opponentPokemon,
      battleState.userPokemon,
      opponentTurn.move
    );

    battleText = `You sent ${userTurn.newActivePokemon.name} out to battle. The opponent's ${opponentTurn.newActivePokemon.name} used ${opponentTurn.move.name}`;
  }
};

const calculateDamage = (attacker, defender, move, baseLevel = 50) => {
  const calculateEffectiveness = (moveType, defenderTypes) => {
    return defenderTypes.reduce((multiplier, type) => {
      return multiplier * (typeAttackChart[moveType]?.[type] || 1);
    }, 1);
  };

  const attackStat = move.isPhysical ? attacker.attack : attacker.specialAttack;
  const defenseStat = move.isPhysical
    ? defender.defense
    : defender.specialDefense;

  const effectiveness = calculateEffectiveness(move.type, defender.types);

  const sameTypeAttackBonus = attacker.types.includes(move.type) ? 1.25 : 1;

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
};
