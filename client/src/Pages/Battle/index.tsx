import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TeamDisplay from "../Home/TeamDisplay";
import useStore from "../../zustand/store";
import { SelectedPokemon } from "../../types";
import ActivePokemon from "./ActivePokemon";
import { io } from "socket.io-client";
import WaitScreen from "./WaitScreen";
import ConnectError from "./ConnectError";

const samplePokemon = [
  {
    name: "Charizard",
    index: 6, // Charizard's National Pokédex number
    isActive: true, // Set to true if it's currently in battle, otherwise false
    currentHp: 78, // Charizard's base HP
    totalHp: 300,
    moves: ["Flamethrower", "Dragon Claw", "Air Slash", "Heat Wave"],
    stats: {
      attack: 84,
      defense: 78,
      specialAttack: 109,
      specialDefense: 85,
      speed: 100,
    },
  },
  {
    name: "Venusaur",
    index: 3, // Venusaur's National Pokédex number
    isActive: true,
    currentHp: 80, // Venusaur's base HP
    moves: ["Solar Beam", "Sludge Bomb", "Earthquake", "Headbutt"],
    totalHp: 300,
    stats: {
      attack: 82,
      defense: 83,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
  },
];

enum BattleStatus {
  WAITING = "waiting",
  DISCONNECTED = "disconnected",
  CONNECT_ERROR = "connection_error",
}

export default function Battle() {
  const { user } = useStore();
  const [battleStatus, setBattleStatus] = useState<BattleStatus>(
    BattleStatus.WAITING
  );

  useEffect(() => {
    const newSocket = io("http://localhost:8000");

    // Listen for 'message' event from the server
    newSocket.on("message", (message: string) => {
      console.log("Message from server:", message);
    });

    newSocket.on("connect", () => console.log("connect"));

    newSocket.on("connect_error", () =>
      setBattleStatus(BattleStatus.CONNECT_ERROR)
    );

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const team = user?.team || [];

  const handleTeamClick = (pokemon: SelectedPokemon) => {
    alert(pokemon.name);
  };

  const getContent = () => {
    if (battleStatus === BattleStatus.WAITING) return <WaitScreen />;
    if (battleStatus === BattleStatus.CONNECT_ERROR) return <ConnectError />;
    else
      return (
        <>
          <TeamDisplay team={team} onClick={handleTeamClick} />
          {samplePokemon.map((pokemon) => (
            <ActivePokemon pokemon={pokemon} />
          ))}
          <TeamDisplay team={team} onClick={handleTeamClick} />
        </>
      );
  };

  return <BattleContainer>{getContent()}</BattleContainer>;
}

const BattleContainer = styled.div`
  display: flex;
  margin-top: 72px;
  justify-content: center;
`;
