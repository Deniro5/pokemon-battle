import styled from "styled-components";
import { BattlePokemon } from "../../../../types";

type ActivePokemonProps = {
  pokemon: BattlePokemon;
  handleAttackClick: (move: string) => void;
  hideMoves?: boolean;
};

export default function ActivePokemon({
  pokemon,
  handleAttackClick,
  hideMoves,
}: ActivePokemonProps) {
  return (
    <PokemonContainer>
      {pokemon ? (
        <>
          <Sprite
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon?.index || 0
            }.png`}
          />
          <HealthContainer>
            {" "}
            <Health
              current={(pokemon.currentHp / pokemon.totalHp) * 100}
            />{" "}
          </HealthContainer>
          {!hideMoves &&
            pokemon.moves.map((move) => (
              <Move onClick={() => handleAttackClick(move)} key={move}>
                {" "}
                {move}
              </Move>
            ))}
        </>
      ) : (
        <Sprite
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${0}.png`}
        />
      )}
    </PokemonContainer>
  );
}
const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 48px;
`;

const Sprite = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid lightgrey;
  background: whitesmoke;
`;

const Move = styled.button`
  border: 1px solid lightgrey;
  padding: 12px;
  margin: 2px 0;
  background: none;

  &:hover {
    background: whitesmoke;
    cursor: pointer;
  }

  &:disabled {
    pointer-events: none;
    background: lightgrey;
  }
`;
const HealthContainer = styled.div`
  height: 20px;
  border-radius: 90px;
  border: 1px solid lightgrey;
  margin: 8px 0px;
`;

const Health = styled.div<{ current: number }>`
  background: orangered;
  width: ${({ current }) => current}%;
  border-radius: 90px;
  height: 18px;
`;
