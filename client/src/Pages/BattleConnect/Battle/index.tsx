import ActivePokemon from "./ActivePokemon";
import {
  BattlePokemon,
  BattleState,
  BattleStatus,
  TurnType,
} from "../../../types";
import useStore from "../../../zustand/store";
import styled from "styled-components";
import { Flex, LinkButton } from "../../../styles";
import { Socket } from "socket.io-client";
import BattleLog from "./BattleLog";
import BattleTeamDisplay from "./BattleTeamDisplay";

type BattleProps = {
  battleState: BattleState;
  socket: Socket | null;
};

export default function Battle({ battleState, socket }: BattleProps) {
  const { user } = useStore();
  if (!user) {
    return <> Something went wrong</>;
  }

  const opponentId = battleState.playerIds.find((id) => id != user._id);

  if (!opponentId) {
    return <> Something went wrong</>;
  }

  const { teams, usernames, activePokemon, turnType, currentTurn } =
    battleState;

  const userTeam = teams[user._id];
  const opponentTeam = teams[opponentId];
  const opponentName = usernames[opponentId];
  const userPokemon = activePokemon[user._id];
  const opponentPokemon = activePokemon[opponentId];
  const isUserTurn = !!currentTurn.find((id) => id === user._id);

  const handleTeamClick = (pokemon: BattlePokemon) => {
    if (!isUserTurn || !socket) return;

    if (pokemon.currentHp <= 0) {
      alert(`${pokemon.name} has fainted and cannot be sent out to battle`);
      return;
    }

    socket.emit("turn", {
      battleId: battleState.id,
      userId: user._id,
      pokemonId: pokemon.id,
      turnType: TurnType.SWITCH,
    });
  };

  const handleAttackClick = (move: string) => {
    if (!isUserTurn || turnType !== TurnType.ATTACK || !socket) return;

    socket.emit("turn", {
      battleId: battleState.id,
      userId: user._id,
      attacker: userPokemon,
      move,
      turnType: TurnType.ATTACK,
    });
  };

  return (
    <BattleContainer>
      <Flex>
        <TeamContainer>
          <BattleTeamDisplay team={userTeam} onClick={handleTeamClick} />
          <Name> {user.username} </Name>
        </TeamContainer>
        <ActivePokemon
          pokemon={userPokemon}
          handleAttackClick={handleAttackClick}
        />
        <ActivePokemon
          hideMoves={true}
          handleAttackClick={() => {}}
          pokemon={opponentPokemon}
        />
        <TeamContainer>
          <BattleTeamDisplay team={opponentTeam} />
          <Name> {opponentName} </Name>
        </TeamContainer>
      </Flex>
      <BattleText>
        {battleState.text[user._id]}
        {battleState.status === BattleStatus.FINISHED && (
          <LinkButton to="/"> Return Home </LinkButton>
        )}
      </BattleText>
      <BattleLog log={battleState.log} />
    </BattleContainer>
  );
}

const BattleContainer = styled.div``;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

const Name = styled.p`
  font-weight: 500;
`;

const BattleText = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 24px;
  margin-top: 48px;
`;
