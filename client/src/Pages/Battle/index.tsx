import React from "react";
import styled from "styled-components";
import TeamDisplay from "../Home/TeamDisplay";
import useStore from "../../zustand/store";
import { SelectedPokemon } from "../../types";
import ActivePokemon from "./ActivePokemon";

const samplePokemon = [
  {
    name: "Charizard",
    index: 6, // Charizard's National Pokédex number
    isActive: true, // Set to true if it's currently in battle, otherwise false
    currentHp: 78, // Charizard's base HP
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
    stats: {
      attack: 82,
      defense: 83,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
  },
];

export default function Battle() {
  const { user } = useStore();

  const team = user?.team || [];

  const handleTeamClick = (pokemon: SelectedPokemon) => {
    alert(pokemon.name);
  };

  return (
    <BattleContainer>
      <TeamDisplay team={team} onClick={handleTeamClick} />
      {samplePokemon.map((pokemon) => (
        <ActivePokemon pokemon={pokemon} />
      ))}
      <TeamDisplay team={team} onClick={handleTeamClick} />
    </BattleContainer>
  );
}

const BattleContainer = styled.div`
  display: flex;
  margin-top: 72px;
  justify-content: center;
`;
