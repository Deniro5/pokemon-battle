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
  id: number;
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

export type FullTeam = BattlePokemon[];

export enum BattleStatus {
  WAITING = "waiting",
  DISCONNECTED = "disconnected",
  CONNECT_ERROR = "connection_error",
  CONNECTED = "connected",
  FINISHED = "finished",
}

export enum TurnType {
  SWITCH = "switch", //at start + on death
  ATTACK = "attack", // attack turn. you can switch here too
}

export type LogEntry = {
  type: "header" | "text";
  text: string;
};

export type BattleState = {
  id: string;
  teams: {
    [userId: string]: FullTeam;
  };
  activePokemon: {
    [userId: string]: BattlePokemon;
  };
  usernames: {
    [userId: string]: string;
  };
  queuedTurns: any[]; //TODO fix this
  currentTurn: string[];
  turnType: TurnType;
  playerIds: string[];
  status: BattleStatus;
  turnCount: number;
  text: {
    [userId: string]: string;
  };
  log: LogEntry[];
};
