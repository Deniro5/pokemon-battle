import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokemonType, SelectedPokemon } from "../../types";
import styled from "styled-components";
import { Button, Flex } from "../../styles";
import { useNavigate } from "react-router-dom";

export default function TeamSelection() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<SelectedPokemon[]>([]);

  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<(SelectedPokemon | null)[]>(
    Array(6).fill(null)
  );

  const getFirstEmptySlot = () => selected.findIndex((selected) => !selected);

  const selectPokemon = (pokemonName: string, index: number) => {
    const emptySpaceIndex = getFirstEmptySlot();
    if (emptySpaceIndex < 0) {
      alert(
        "Team is full. Please remove one pokemon before trying to add another one"
      );
    }

    const newSelected = [...selected];
    newSelected[emptySpaceIndex] = {
      name: pokemonName,
      index,
    };
    setSelected(newSelected);
  };

  const removePokemon = (indexToRemove: number) => {
    if (!selected[indexToRemove]) return;

    const newSelected = [...selected];
    newSelected.splice(indexToRemove, 1);
    newSelected.push(null);

    setSelected(newSelected);
  };

  const handleSubmit = () => {
    //send to backend
    navigate("/");
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Fetch data for the first 151 Pokémon
        const response = await axios.get<{ results: PokemonType[] }>(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        console.log(response);
        setPokemon(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Title>Team Selection</Title>
      <TeamSelectionContainer>
        {pokemon.map((pokemon, index) => (
          <TileContainer>
            <Tile onClick={() => selectPokemon(pokemon.name, index + 1)}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
              />
            </Tile>
            <TileLabel> {pokemon.name} </TileLabel>
          </TileContainer>
        ))}{" "}
      </TeamSelectionContainer>
      <SelectedTeamContainer>
        <SelectedLabel>
          {" "}
          Selected:
          <StyledFlex>
            {selected.map((pokemon, index) => (
              <Tile onClick={() => removePokemon(index)}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon?.index || 0
                  }.png`}
                />
              </Tile>
            ))}
            <Button onClick={handleSubmit} disabled={getFirstEmptySlot() >= 0}>
              {" "}
              Confirm Changes{" "}
            </Button>
          </StyledFlex>
        </SelectedLabel>
      </SelectedTeamContainer>
    </>
  );
}

const Title = styled.h2`
  text-align: center;
`;

const TeamSelectionContainer = styled.div`
  margin: auto;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  height: calc(100vh - 320px);
  overflow: scroll;
  border-bottom: 1px solid lightgrey;
`;

const Tile = styled.button`
  height: 100px;
  width: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: lightgrey;
  }
`;

const TileLabel = styled.p`
  margin-top: 4px;
  font-weight: 500;
`;

const SelectedTeamContainer = styled.div`
  height: 156px;
`;

const SelectedLabel = styled.h3`
  padding-left: 24px;
`;

const StyledFlex = styled(Flex)`
  gap: 24px;
  margin-top: 8px;
  align-items: center;
`;

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
