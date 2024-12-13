import styled from "styled-components";
import { BasePokemon } from "../../../types";

type TeamDisplayProps = {
  team: (BasePokemon | null)[];
};

export default function TeamDisplay({ team }: TeamDisplayProps) {
  return (
    <TeamGrid>
      {team.map((pokemon) => (
        <TileContainer>
          <Tile>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon?.index || 0
              }.png`}
            />
          </Tile>
          <Name>{pokemon?.name}</Name>
        </TileContainer>
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

const Name = styled.p`
  margin-top: 4px;
  margin-bottom: 12px;
`;

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
