import styled from "styled-components";
import { SelectedPokemon } from "../../../types";
import useStore from "../../../zustand/store";

type TeamDisplayProps = {
  onClick?: (selectedPokemon: SelectedPokemon) => void;
  team: (SelectedPokemon | null)[];
};

export default function TeamDisplay({ team, onClick }: TeamDisplayProps) {
  const { user } = useStore();

  const handleOnClick = (pokemon: null | SelectedPokemon) => {
    if (!onClick || !pokemon) return;

    onClick(pokemon);
  };

  return (
    <TeamGrid>
      {team.map((pokemon) => (
        <Tile onClick={() => handleOnClick(pokemon)}>
          {" "}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon?.index || 0
            }.png`}
          />{" "}
        </Tile>
      ))}
    </TeamGrid>
  );
}

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-template-rows: repeat(2, 1fr); /* 2 rows */
  gap: 12px; /* Optional: Adds space between grid items */
  margin-top: 48px;
  margin-bottom: 24px;
`;

const Tile = styled.div`
  background-color: #ddd;
  border: 1px solid #333;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
