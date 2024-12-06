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

    console.log(pokemon);
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
    if (!isUserTurn || turnType !== TurnType.ATTACK) return;

    socket.emit("turn", {
      battleId: battleState.id,
      userId: user._id,
      attacker: userPokemon,
      defender: opponentPokemon,
      move,
      turnType: TurnType.ATTACK,
    });
  };

  console.log(userTeam);

  return (
    <BattleContainer>
      <Flex>
        <TeamContainer>
          <TeamDisplay team={userTeam} onClick={handleTeamClick} />
          <Name> {user.username} </Name>
        </TeamContainer>
        <ActivePokemon
          pokemon={userPokemon}
          handleAttackClick={handleAttackClick}
        />
        <ActivePokemon handleAttackClick={() => {}} pokemon={opponentPokemon} />
        <TeamContainer>
          <TeamDisplay team={opponentTeam} />
          <Name> {opponentName} </Name>
        </TeamContainer>
      </Flex>
      <BattleText> {battleState.text} </BattleText>
      <BattleLog>
        {" "}
        {battleState.log.map((item) =>
          item.type === "header" ? (
            <BattleLogHeader> {item.text} </BattleLogHeader>
          ) : (
            <BattleLogText> {item.text} </BattleLogText>
          )
        )}{" "}
      </BattleLog>
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

const BattleLog = styled(BattleText)`
  height: 500px;
  overflow: scroll;
`;

const BattleLogHeader = styled.h3`
  margin-top: 24px;
`;
const BattleLogText = styled.p``;
