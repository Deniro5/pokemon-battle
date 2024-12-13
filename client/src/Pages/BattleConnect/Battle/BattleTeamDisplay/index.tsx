import styled from "styled-components";
import { BattlePokemon } from "../../../../types";

type TeamDisplayProps = {
  onClick?: (selectedPokemon: BattlePokemon) => void;
  team: BattlePokemon[];
};

export default function BattleTeamDisplay({ team, onClick }: TeamDisplayProps) {
  const handleOnClick = (pokemon: BattlePokemon | null) => {
    if (!onClick || !pokemon) return;

    if (pokemon.currentHp <= 0) {
      alert(pokemon.name + " has fainted and is unable to battle");
      return;
    }
    onClick(pokemon);
  };

  return (
    <TeamGrid>
      {team.map((pokemon) => (
        <TileContainer hasFainted={pokemon.currentHp <= 0}>
          <Tile onClick={() => handleOnClick(pokemon)}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon?.index || 0
              }.png`}
            />
          </Tile>
          <Name>{pokemon?.name}</Name>
          <HealthContainer>
            <Health current={(pokemon.currentHp / pokemon.totalHp) * 100} />
          </HealthContainer>
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

const TileContainer = styled.div<{ hasFainted: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ hasFainted }) => (hasFainted ? 0.5 : 1)};
`;

const HealthContainer = styled.div`
  height: 12px;
  border-radius: 90px;
  border: 1px solid lightgrey;
  width: 80px;
`;

const Health = styled.div<{ current: number }>`
  background: orangered;
  width: ${({ current }) => current}%;
  border-radius: 90px;
  height: 10px;
`;
