export type PokemonType = {
  name: string;
  url: string;
};

export type SelectedPokemon = {
  name: string;
  index: number;
};

export type User = {
  _id: string;
  username: string;
  team: string[];
  battles: number;
  wins: number;
  losses: number;
};
