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
  team: (SelectedPokemon | null)[];
  battles: number;
  wins: number;
  losses: number;
};

export type BattlePokemon = {
  name: string;
  index: number;
  isActive: boolean;
  currentHp: number;
  totalHp: number;
  moves: string[];
  stats: {
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
};
