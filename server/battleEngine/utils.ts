import { AttackTurn, FullTeam, SwitchTurn, Turn, TurnType } from "../types";

export const isSwitchTurn = (turn: Turn): turn is SwitchTurn =>
  turn.turnType === TurnType.SWITCH;

export const isAttackTurn = (turn: Turn): turn is AttackTurn =>
  turn.turnType === TurnType.ATTACK;

export const getTurnsInOrder = (firstTurn: Turn, secondTurn: Turn) => {
  if (!secondTurn) return [firstTurn];

  if (isSwitchTurn(firstTurn)) return [firstTurn, secondTurn];
  if (isSwitchTurn(secondTurn)) return [secondTurn, firstTurn];

  if (isAttackTurn(firstTurn) && isAttackTurn(secondTurn)) {
    const firstSpeed = firstTurn?.attacker.stats.speed;
    const secondSpeed = secondTurn?.attacker.stats.speed;

    return firstSpeed > secondSpeed
      ? [firstTurn, secondTurn]
      : [secondTurn, firstTurn];
  }

  return [firstTurn, secondTurn];
};

export const titleCaseToUnderscore = (input: string) => {
  return input.replace(" ", "_");
};

export const checkIsBattleOver = (team: FullTeam) =>
  team.every((pokemon) => pokemon.currentHp <= 0);
