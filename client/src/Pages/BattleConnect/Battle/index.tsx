import React from "react";
import TeamDisplay from "../../Home/TeamDisplay";
import ActivePokemon from "./ActivePokemon";
import {
  BattlePokemon,
  BattleState,
  SelectedPokemon,
  TurnType,
} from "../../../types";
import useStore from "../../../zustand/store";
import styled from "styled-components";
import { Flex } from "../../../styles";
import { Socket } from "socket.io-client";

type BattleProps = {
  battleState: BattleState;
  socket: Socket;
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
    if (!isUserTurn) return;

    socket.emit("turn", {
      battleId: battleState.id,
      userId: user._id,
      pokemon,
      turnType: TurnType.SWITCH,
    });
  };

  return (
    <BattleContainer>
      <Flex>
        <TeamContainer>
          <TeamDisplay team={userTeam} onClick={handleTeamClick} />
          <Name> {user.username} </Name>
        </TeamContainer>
        <ActivePokemon pokemon={userPokemon} />
        <ActivePokemon pokemon={opponentPokemon} />
        <TeamContainer>
          <TeamDisplay team={opponentTeam} />
          <Name> {opponentName} </Name>
        </TeamContainer>
      </Flex>
      <BattleText> {battleState.text} </BattleText>
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
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 24px;
  margin-top: 48px;
`;
