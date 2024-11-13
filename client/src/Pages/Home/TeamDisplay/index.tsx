import styled from "styled-components";
import { SelectedPokemon } from "../../../types";

const sample: (SelectedPokemon | null)[] = [
  { name: "bulbasaur", index: 1 },
  { name: "ivysaur", index: 2 },
  { name: "venusaur", index: 3 },
  { name: "charmander", index: 4 },
  { name: "charmeleon", index: 5 },
  { name: "charizard", index: 6 },
];

export default function TeamDisplay() {
  return (
    <TeamGrid>
      {sample.map((pok) => (
        <Tile>
          {" "}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok?.index}.png`}
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
