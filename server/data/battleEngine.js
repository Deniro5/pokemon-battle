const pokemonData = require("./pokemonData");
const typeAttackChart = require("./typeAttackChart");

//Connect battle (different file)

//Take user teams and return 'battle object'

const getInitialFullTeamData = (team) =>
  team.map((pokemon) => {
    const fullPokemon = pokemonData[pokemon.index - 1];
    return fullPokemon;
  });

const getInitialBattleState = (userTeam, opponentTeam) => {
  const fullUserTeam = getInitialFullTeamData(userTeam);
  const fullOpponentTeam = getInitialFullTeamData(opponentTeam);

  return {
    userTeam: fullUserTeam,
    opponentTeam: fullOpponentTeam,
    userPokemon: null,
    opponentPokemon: null,
    status: "in progress",
    text: "Choose a pokemon to send into battle",
  };
};

//Each user chooses a pokemon to switch in

const setUserActivePokemon = (battleState, newActivePokemon) => {
  return { ...battleState, userPokemon: newActivePokemon };
};

const setOpponentActivePokemon = (battleState, newActivePokemon) => {
  return { ...battleState, opponentPokemon: newActivePokemon };
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
  calculateDamage,
  getInitialFullTeamData,
  getInitialBattleState,
  setUserActivePokemon,
  setOpponentActivePokemon,
};
