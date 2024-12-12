import { BattlePokemon, PokemonType } from "../types";

const pokemonData: Omit<BattlePokemon, "id">[] = [
  {
    name: "Bulbasaur",
    index: 1,
    currentHp: 180,
    totalHp: 180, // 180
    moves: ["Tackle", "Vine Whip"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
    },
  },
  {
    name: "Ivysaur",
    index: 2,
    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Tackle", "Vine Whip"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 62,
      defense: 63,
      specialAttack: 80,
      specialDefense: 80,
      speed: 60,
    },
  },
  {
    name: "Venusaur",
    index: 3,
    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Razor Leaf", "Sludge Bomb", "Earthquake", "Body Slam"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 82,
      defense: 83,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
  },
  {
    name: "Charmander",
    index: 4,
    currentHp: 156,
    totalHp: 156, // 156
    moves: ["Scratch", "Ember"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 52,
      defense: 43,
      specialAttack: 60,
      specialDefense: 50,
      speed: 65,
    },
  },
  {
    name: "Charmeleon",
    index: 5,
    currentHp: 232,
    totalHp: 232, // 232
    moves: ["Flamethrower", "Dragon Claw", "Slash", "Scratch"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 64,
      defense: 58,
      specialAttack: 80,
      specialDefense: 65,
      speed: 80,
    },
  },
  {
    name: "Charizard",
    index: 6,
    currentHp: 312,
    totalHp: 312, // 312
    moves: ["Flamethrower", "Dragon Claw", "Air Slash", "Heat Wave"],
    types: [PokemonType.FIRE, PokemonType.FLYING],
    stats: {
      attack: 84,
      defense: 78,
      specialAttack: 109,
      specialDefense: 85,
      speed: 100,
    },
  },
  {
    name: "Squirtle",
    index: 7,
    currentHp: 176,
    totalHp: 176, // 176
    moves: ["Tackle", "Water Gun", "Bubble"],
    types: [PokemonType.WATER],
    stats: {
      attack: 48,
      defense: 65,
      specialAttack: 50,
      specialDefense: 64,
      speed: 43,
    },
  },
  {
    name: "Wartortle",
    index: 8,

    currentHp: 236,
    totalHp: 236, // 236
    moves: ["Tackle", "Water Gun", "Ice punch", "Bubble"],
    types: [PokemonType.WATER],
    stats: {
      attack: 63,
      defense: 80,
      specialAttack: 65,
      specialDefense: 80,
      speed: 58,
    },
  },
  {
    name: "Blastoise",
    index: 9,

    currentHp: 316,
    totalHp: 316, // 316
    moves: ["Hydro Pump", "Skull Bash", "Ice Beam", "Surf"],
    types: [PokemonType.WATER],
    stats: {
      attack: 83,
      defense: 100,
      specialAttack: 85,
      specialDefense: 105,
      speed: 78,
    },
  },
  {
    name: "Caterpie",
    index: 10,

    currentHp: 180,
    totalHp: 180, // 180
    moves: ["Tackle"],
    types: [PokemonType.BUG],
    stats: {
      attack: 30,
      defense: 35,
      specialAttack: 20,
      specialDefense: 20,
      speed: 45,
    },
  },
  {
    name: "Metapod",
    index: 11,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Tackle"],
    types: [PokemonType.BUG],
    stats: {
      attack: 20,
      defense: 55,
      specialAttack: 25,
      specialDefense: 25,
      speed: 30,
    },
  },
  {
    name: "Butterfree",
    index: 12,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Gust", "Confusion", "Psybeam", "Tackle"],
    types: [PokemonType.BUG, PokemonType.FLYING],
    stats: {
      attack: 45,
      defense: 50,
      specialAttack: 90,
      specialDefense: 80,
      speed: 70,
    },
  },
  {
    name: "Weedle",
    index: 13,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Poison Sting"],
    types: [PokemonType.POISON],
    stats: {
      attack: 35,
      defense: 30,
      specialAttack: 20,
      specialDefense: 20,
      speed: 50,
    },
  },
  {
    name: "Kakuna",
    index: 14,

    currentHp: 180,
    totalHp: 180, // 180
    moves: ["Poison Sting"],
    types: [PokemonType.POISON],
    stats: {
      attack: 25,
      defense: 50,
      specialAttack: 25,
      specialDefense: 25,
      speed: 35,
    },
  },
  {
    name: "Beedrill",
    index: 15,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Fury Attack", "Twinneedle", "Rage", "Poison Sting"],
    types: [PokemonType.POISON, PokemonType.FLYING],
    stats: {
      attack: 90,
      defense: 40,
      specialAttack: 45,
      specialDefense: 80,
      speed: 75,
    },
  },
  {
    name: "Pidgey",
    index: 16,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Tackle", "Peck", "Gust", "Quick Attack"],
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    stats: {
      attack: 45,
      defense: 40,
      specialAttack: 35,
      specialDefense: 35,
      speed: 56,
    },
  },
  {
    name: "Pidgeotto",
    index: 17,

    currentHp: 252,
    totalHp: 252, // 252
    moves: ["Gust", "Quick Attack", "Tackle", "Wing Attack"],
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    stats: {
      attack: 60,
      defense: 55,
      specialAttack: 50,
      specialDefense: 50,
      speed: 71,
    },
  },
  {
    name: "Pidgeot",
    index: 18,

    currentHp: 332,
    totalHp: 332, // 332
    moves: ["Wing Attack", "Quick Attack", "Tackle", "Hyper Beam"],
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    stats: {
      attack: 80,
      defense: 75,
      specialAttack: 70,
      specialDefense: 70,
      speed: 91,
    },
  },
  {
    name: "Rattata",
    index: 19,

    currentHp: 120,
    totalHp: 120, // 120
    moves: ["Tackle", "Scratch", "Quick Attack", "Bite"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 56,
      defense: 35,
      specialAttack: 25,
      specialDefense: 35,
      speed: 72,
    },
  },
  {
    name: "Raticate",
    index: 20,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Hyper Fang", "Quick Attack", "Bite", "Headbutt"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 81,
      defense: 60,
      specialAttack: 50,
      specialDefense: 70,
      speed: 97,
    },
  },
  {
    name: "Spearow",
    index: 21,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Peck", "Tackle", "Bite", "Fury Attack"],
    types: [PokemonType.FLYING],
    stats: {
      attack: 60,
      defense: 30,
      specialAttack: 31,
      specialDefense: 31,
      speed: 70,
    },
  },
  {
    name: "Fearow",
    index: 22,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Drill Peck", "Fury Attack", "Headbutt", "Bite"],
    types: [PokemonType.FLYING],
    stats: {
      attack: 90,
      defense: 65,
      specialAttack: 61,
      specialDefense: 61,
      speed: 100,
    },
  },
  {
    name: "Ekans",
    index: 23,

    currentHp: 140,
    totalHp: 140, // 140
    moves: ["Wrap", "Poison Sting", "Bite", "Slam"],
    types: [PokemonType.POISON],
    stats: {
      attack: 60,
      defense: 44,
      specialAttack: 40,
      specialDefense: 54,
      speed: 55,
    },
  },
  {
    name: "Arbok",
    index: 24,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Bite", "Poison Jab", "Headbutt", "Slam"],
    types: [PokemonType.POISON],
    stats: {
      attack: 85,
      defense: 69,
      specialAttack: 65,
      specialDefense: 79,
      speed: 80,
    },
  },
  {
    name: "Pikachu",
    index: 25,

    currentHp: 140,
    totalHp: 140, // 140
    moves: ["Thunderbolt", "Quick Attack", "Iron Tail", "Electro Ball"],
    types: [PokemonType.ELECTRIC],
    stats: {
      attack: 55,
      defense: 40,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
    },
  },
  {
    name: "Raichu",
    index: 26,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Thunder Punch", "Thunderbolt", "Quick Attack", "Iron Tail"],
    types: [PokemonType.ELECTRIC],
    stats: {
      attack: 90,
      defense: 55,
      specialAttack: 90,
      specialDefense: 80,
      speed: 110,
    },
  },
  {
    name: "Sandshrew",
    index: 27,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Scratch", "Quick Attack", "Tackle", "Poison Sting"],
    types: [PokemonType.GROUND],
    stats: {
      attack: 75,
      defense: 85,
      specialAttack: 20,
      specialDefense: 30,
      speed: 40,
    },
  },
  {
    name: "Sandslash",
    index: 28,

    currentHp: 300,
    totalHp: 300, // 300
    moves: ["Slash", "Earthquake", "Fury Swipes", "Scratch"],
    types: [PokemonType.GROUND],
    stats: {
      attack: 100,
      defense: 110,
      specialAttack: 45,
      specialDefense: 55,
      speed: 65,
    },
  },
  {
    name: "Nidoran♀",
    index: 29,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Scratch", "Poison Sting", "Double Kick", "Headbutt"],
    types: [PokemonType.POISON],
    stats: {
      attack: 47,
      defense: 52,
      specialAttack: 40,
      specialDefense: 40,
      speed: 41,
    },
  },
  {
    name: "Nidorina",
    index: 30,

    currentHp: 280,
    totalHp: 280, // 280
    moves: ["Bite", "Double Kick", "Poison Sting", "Headbutt"],
    types: [PokemonType.POISON],
    stats: {
      attack: 62,
      defense: 67,
      specialAttack: 55,
      specialDefense: 55,
      speed: 56,
    },
  },
  {
    name: "Nidoqueen",
    index: 31,

    currentHp: 360,
    totalHp: 360, // 360
    moves: ["Body Slam", "Earthquake", "Double Kick", "Poison Sting"],
    types: [PokemonType.POISON, PokemonType.GROUND],
    stats: {
      attack: 92,
      defense: 87,
      specialAttack: 75,
      specialDefense: 85,
      speed: 76,
    },
  },
  {
    name: "Nidoran♂",
    index: 32,

    currentHp: 184,
    totalHp: 184, // 184
    moves: ["Poison Sting", "Tackle"],
    types: [PokemonType.POISON],
    stats: {
      attack: 57,
      defense: 40,
      specialAttack: 40,
      specialDefense: 50,
      speed: 41,
    },
  },
  {
    name: "Nidorino",
    index: 33,

    currentHp: 244,
    totalHp: 244, // 244
    moves: ["Horn Attack", "Poison Sting", "Double Kick", "Fury Attack"],
    types: [PokemonType.POISON],
    stats: {
      attack: 72,
      defense: 57,
      specialAttack: 55,
      specialDefense: 55,
      speed: 65,
    },
  },
  {
    name: "Nidoking",
    index: 34,

    currentHp: 324,
    totalHp: 324, // 324
    moves: ["Earthquake", "Horn Drill", "Double Kick", "Poison Sting"],
    types: [PokemonType.POISON, PokemonType.GROUND],
    stats: {
      attack: 102,
      defense: 77,
      specialAttack: 85,
      specialDefense: 75,
      speed: 85,
    },
  },
  {
    name: "Clefairy",
    index: 35,

    currentHp: 280,
    totalHp: 280, // 280
    moves: ["Pound", "Double Slap"],
    types: [PokemonType.FAIRY],
    stats: {
      attack: 45,
      defense: 48,
      specialAttack: 60,
      specialDefense: 65,
      speed: 35,
    },
  },
  {
    name: "Clefable",
    index: 36,

    currentHp: 380,
    totalHp: 380, // 380
    moves: ["Moonblast", "Body Slam", "Pound", "Double Slap"],
    types: [PokemonType.FAIRY],
    stats: {
      attack: 70,
      defense: 73,
      specialAttack: 95,
      specialDefense: 90,
      speed: 60,
    },
  },
  {
    name: "Vulpix",
    index: 37,

    currentHp: 152,
    totalHp: 152, // 152
    moves: ["Quick Attack", "Ember"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 41,
      defense: 40,
      specialAttack: 50,
      specialDefense: 65,
      speed: 65,
    },
  },
  {
    name: "Ninetales",
    index: 38,

    currentHp: 292,
    totalHp: 292, // 292
    moves: ["Flamethrower", "Quick Attack", "Fire Blast", "Iron Tail"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 76,
      defense: 75,
      specialAttack: 81,
      specialDefense: 100,
      speed: 100,
    },
  },
  {
    name: "Jigglypuff",
    index: 39,

    currentHp: 460,
    totalHp: 460, // 460
    moves: ["Pound", "Rollout"],
    types: [PokemonType.FAIRY],
    stats: {
      attack: 45,
      defense: 20,
      specialAttack: 45,
      specialDefense: 25,
      speed: 20,
    },
  },
  {
    name: "Wigglytuff",
    index: 40,

    currentHp: 560,
    totalHp: 560, // 560
    moves: ["Hyper Voice", "Slam", "Rollout", "Pound"],
    types: [PokemonType.FAIRY],
    stats: {
      attack: 70,
      defense: 45,
      specialAttack: 75,
      specialDefense: 50,
      speed: 45,
    },
  },
  {
    name: "Zubat",
    index: 41,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Leech Life", "Astonish", "Bite"],
    types: [PokemonType.FLYING, PokemonType.POISON],
    stats: {
      attack: 45,
      defense: 35,
      specialAttack: 30,
      specialDefense: 40,
      speed: 70,
    },
  },
  {
    name: "Golbat",
    index: 42,

    currentHp: 300,
    totalHp: 300, // 300
    moves: ["Bite", "Wing Attack", "Astonish", "Poison Fang"],
    types: [PokemonType.FLYING, PokemonType.POISON],
    stats: {
      attack: 80,
      defense: 70,
      specialAttack: 65,
      specialDefense: 75,
      speed: 90,
    },
  },
  {
    name: "Oddish",
    index: 43,

    currentHp: 180,
    totalHp: 180, // 180
    moves: ["Vine Whip", "Acid"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 50,
      defense: 55,
      specialAttack: 75,
      specialDefense: 65,
      speed: 30,
    },
  },
  {
    name: "Gloom",
    index: 44,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Acid", "Vine Whip", "Sludge"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 65,
      defense: 70,
      specialAttack: 85,
      specialDefense: 75,
      speed: 40,
    },
  },
  {
    name: "Vileplume",
    index: 45,

    currentHp: 300,
    totalHp: 300, // 300
    moves: ["Solar Beam", "Sludge Bomb", "Razor Leaf", "Acid"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 80,
      defense: 70,
      specialAttack: 100,
      specialDefense: 90,
      speed: 50,
    },
  },
  {
    name: "Paras",
    index: 46,

    currentHp: 140,
    totalHp: 140, // 140
    moves: ["Scratch", "Leech Life"],
    types: [PokemonType.GRASS, PokemonType.BUG],
    stats: {
      attack: 70,
      defense: 55,
      specialAttack: 35,
      specialDefense: 45,
      speed: 25,
    },
  },
  {
    name: "Parasect",
    index: 47,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Headbutt", "Leech Life", "Slam", "Slash"],
    types: [PokemonType.GRASS, PokemonType.BUG],
    stats: {
      attack: 95,
      defense: 80,
      specialAttack: 60,
      specialDefense: 80,
      speed: 30,
    },
  },
  {
    name: "Venonat",
    index: 48,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Tackle", "Confusion"],
    types: [PokemonType.POISON, PokemonType.BUG],
    stats: {
      attack: 60,
      defense: 55,
      specialAttack: 40,
      specialDefense: 55,
      speed: 45,
    },
  },
  {
    name: "Venomoth",
    index: 49,

    currentHp: 280,
    totalHp: 280, // 280
    moves: ["Poison Fang", "Psychic", "Leech Life", "Tackle"],
    types: [PokemonType.POISON, PokemonType.FLYING],
    stats: {
      attack: 65,
      defense: 60,
      specialAttack: 90,
      specialDefense: 75,
      speed: 90,
    },
  },
  {
    name: "Diglett",
    index: 50,

    currentHp: 40,
    totalHp: 40, // 40
    moves: ["Scratch", "Rock Throw"],
    types: [PokemonType.GROUND],
    stats: {
      attack: 55,
      defense: 25,
      specialAttack: 35,
      specialDefense: 45,
      speed: 95,
    },
  },
  {
    name: "Dugtrio",
    index: 51,

    currentHp: 140,
    totalHp: 140, // 140
    moves: ["Dig", "Slash"],
    types: [PokemonType.GROUND],
    stats: {
      attack: 100,
      defense: 50,
      specialAttack: 50,
      specialDefense: 70,
      speed: 120,
    },
  },
  {
    name: "Meowth",
    index: 52,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Bite", "Scratch", "Fury Swipes"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 45,
      defense: 35,
      specialAttack: 40,
      specialDefense: 40,
      speed: 90,
    },
  },
  {
    name: "Persian",
    index: 53,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Bite", "Slash", "Fury Swipes"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 70,
      defense: 60,
      specialAttack: 65,
      specialDefense: 50,
      speed: 115,
    },
  },
  {
    name: "Psyduck",
    index: 54,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Confusion", "Water Gun"],
    types: [PokemonType.WATER],
    stats: {
      attack: 52,
      defense: 48,
      specialAttack: 65,
      specialDefense: 50,
      speed: 55,
    },
  },
  {
    name: "Golduck",
    index: 55,

    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Psychic", "Water Gun", "Confusion", "Aqua Tail"],
    types: [PokemonType.WATER],
    stats: {
      attack: 82,
      defense: 78,
      specialAttack: 95,
      specialDefense: 80,
      speed: 85,
    },
  },
  {
    name: "Mankey",
    index: 56,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Low Kick", "Karate Chop", "Scratch"],
    types: [PokemonType.FIGHTING],
    stats: {
      attack: 80,
      defense: 35,
      specialAttack: 35,
      specialDefense: 45,
      speed: 70,
    },
  },
  {
    name: "Primeape",
    index: 57,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Low Kick", "Karate Chop", "Seismic Toss", "Hyper Beam"],
    types: [PokemonType.FIGHTING],
    stats: {
      attack: 105,
      defense: 60,
      specialAttack: 60,
      specialDefense: 70,
      speed: 95,
    },
  },
  {
    name: "Growlithe",
    index: 58,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Bite", "Ember", "Take Down"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 70,
      defense: 45,
      specialAttack: 50,
      specialDefense: 50,
      speed: 60,
    },
  },
  {
    name: "Arcanine",
    index: 59,

    currentHp: 360,
    totalHp: 360, // 360
    moves: ["Flamethrower", "Bite", "Take Down", "Wild Charge"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 110,
      defense: 80,
      specialAttack: 100,
      specialDefense: 80,
      speed: 95,
    },
  },
  {
    name: "Poliwag",
    index: 60,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Water Gun", "Tackle"],
    types: [PokemonType.WATER],
    stats: {
      attack: 50,
      defense: 40,
      specialAttack: 50,
      specialDefense: 40,
      speed: 90,
    },
  },
  {
    name: "Poliwhirl",
    index: 61,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Water Gun", "Tackle", "BubbleBeam", "Body Slam"],
    types: [PokemonType.WATER],
    stats: {
      attack: 65,
      defense: 65,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
    },
  },
  {
    name: "Poliwrath",
    index: 62,

    currentHp: 360,
    totalHp: 360, // 360
    moves: ["Hydro Pump", "Body Slam", "BubbleBeam"],
    types: [PokemonType.WATER, PokemonType.FIGHTING],
    stats: {
      attack: 75,
      defense: 75,
      specialAttack: 90,
      specialDefense: 100,
      speed: 70,
    },
  },
  {
    name: "Abra",
    index: 63,

    currentHp: 100,
    totalHp: 100, // 100
    moves: ["Confusion"],
    types: [PokemonType.PSYCHIC],
    stats: {
      attack: 20,
      defense: 15,
      specialAttack: 105,
      specialDefense: 55,
      speed: 90,
    },
  },
  {
    name: "Kadabra",
    index: 64,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Confusion", "Psybeam"],
    types: [PokemonType.PSYCHIC],
    stats: {
      attack: 35,
      defense: 30,
      specialAttack: 120,
      specialDefense: 70,
      speed: 105,
    },
  },
  {
    name: "Alakazam",
    index: 65,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Psychic", "Shadow Ball", "Confusion", "Psybeam"],
    types: [PokemonType.PSYCHIC],
    stats: {
      attack: 50,
      defense: 45,
      specialAttack: 135,
      specialDefense: 95,
      speed: 120,
    },
  },
  {
    name: "Machop",
    index: 66,

    currentHp: 280,
    totalHp: 280, // 280
    moves: ["Low Kick", "Karate Chop", "Seismic Toss", "Rock Slide"],
    types: [PokemonType.FIGHTING],
    stats: {
      attack: 80,
      defense: 50,
      specialAttack: 35,
      specialDefense: 35,
      speed: 35,
    },
  },
  {
    name: "Machoke",
    index: 67,

    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Low Kick", "Karate Chop", "Seismic Toss", "Submission"],
    types: [PokemonType.FIGHTING],
    stats: {
      attack: 100,
      defense: 70,
      specialAttack: 50,
      specialDefense: 60,
      speed: 45,
    },
  },
  {
    name: "Machamp",
    index: 68,

    currentHp: 360,
    totalHp: 360, // 360
    moves: ["Low Kick", "Karate Chop", "Seismic Toss", "Dynamic Punch"],
    types: [PokemonType.FIGHTING],
    stats: {
      attack: 130,
      defense: 80,
      specialAttack: 65,
      specialDefense: 85,
      speed: 55,
    },
  },
  {
    name: "Bellsprout",
    index: 69,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Vine Whip", "Acid"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 75,
      defense: 35,
      specialAttack: 70,
      specialDefense: 30,
      speed: 40,
    },
  },
  {
    name: "Weepinbell",
    index: 70,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Vine Whip", "Acid", "Razor Leaf"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 90,
      defense: 50,
      specialAttack: 85,
      specialDefense: 45,
      speed: 55,
    },
  },
  {
    name: "Victreebel",
    index: 71,

    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Solar Beam", "Acid", "Sludge Bomb", "Razor Leaf"],
    types: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      attack: 105,
      defense: 65,
      specialAttack: 100,
      specialDefense: 70,
      speed: 70,
    },
  },
  {
    name: "Tentacool",
    index: 72,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Poison Sting", "Acid", "BubbleBeam"],
    types: [PokemonType.WATER, PokemonType.POISON],
    stats: {
      attack: 40,
      defense: 35,
      specialAttack: 50,
      specialDefense: 100,
      speed: 70,
    },
  },
  {
    name: "Tentacruel",
    index: 73,

    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Poison Sting", "Acid", "Sludge Bomb", "Hydro Pump"],
    types: [PokemonType.WATER, PokemonType.POISON],
    stats: {
      attack: 70,
      defense: 65,
      specialAttack: 80,
      specialDefense: 120,
      speed: 100,
    },
  },
  {
    name: "Geodude",
    index: 74,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Tackle", "Rock Throw", "Magnitude"],
    types: [PokemonType.ROCK, PokemonType.GROUND],
    stats: {
      attack: 80,
      defense: 100,
      specialAttack: 30,
      specialDefense: 30,
      speed: 20,
    },
  },
  {
    name: "Graveler",
    index: 75,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Rock Throw", "Magnitude", "Earthquake"],
    types: [PokemonType.ROCK, PokemonType.GROUND],
    stats: {
      attack: 95,
      defense: 115,
      specialAttack: 45,
      specialDefense: 45,
      speed: 35,
    },
  },
  {
    name: "Golem",
    index: 76,

    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Earthquake", "Rock Slide", "Explosion"],
    types: [PokemonType.ROCK, PokemonType.GROUND],
    stats: {
      attack: 110,
      defense: 130,
      specialAttack: 55,
      specialDefense: 65,
      speed: 40,
    },
  },
  {
    name: "Ponyta",
    index: 77,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Ember", "Stomp", "Fire Spin"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 60,
      defense: 40,
      specialAttack: 50,
      specialDefense: 40,
      speed: 90,
    },
  },
  {
    name: "Rapidash",
    index: 78,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Flamethrower", "Stomp", "Fire Spin"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 85,
      defense: 60,
      specialAttack: 80,
      specialDefense: 50,
      speed: 105,
    },
  },
  {
    name: "Slowpoke",
    index: 79,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Water Gun", "Confusion", "Tackle"],
    types: [PokemonType.WATER, PokemonType.PSYCHIC],
    stats: {
      attack: 65,
      defense: 65,
      specialAttack: 40,
      specialDefense: 40,
      speed: 15,
    },
  },
  {
    name: "Slowbro",
    index: 80,

    currentHp: 380,
    totalHp: 380, // 380
    moves: ["Psychic", "Surf", "Water Gun"],
    types: [PokemonType.WATER, PokemonType.PSYCHIC],
    stats: {
      attack: 75,
      defense: 110,
      specialAttack: 100,
      specialDefense: 80,
      speed: 30,
    },
  },
  {
    name: "Magnemite",
    index: 81,

    currentHp: 100,
    totalHp: 100, // 100
    moves: ["Thunderbolt", "Magnet Bomb"],
    types: [PokemonType.STEEL, PokemonType.ELECTRIC],
    stats: {
      attack: 35,
      defense: 35,
      specialAttack: 95,
      specialDefense: 55,
      speed: 45,
    },
  },
  {
    name: "Magneton",
    index: 82,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Thunderbolt", "Magnet Bomb", "Flash Cannon"],
    types: [PokemonType.STEEL, PokemonType.ELECTRIC],
    stats: {
      attack: 60,
      defense: 95,
      specialAttack: 120,
      specialDefense: 70,
      speed: 70,
    },
  },
  {
    name: "Farfetch'd",
    index: 83,

    currentHp: 208,
    totalHp: 208, // 208
    moves: ["Peck", "Aerial Ace", "Fury Cutter"],
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    stats: {
      attack: 65,
      defense: 55,
      specialAttack: 58,
      specialDefense: 50,
      speed: 60,
    },
  },
  {
    name: "Doduo",
    index: 84,

    currentHp: 140,
    totalHp: 140, // 140
    moves: ["Peck", "Drill Peck"],
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    stats: {
      attack: 85,
      defense: 45,
      specialAttack: 35,
      specialDefense: 35,
      speed: 75,
    },
  },
  {
    name: "Dodrio",
    index: 85,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Peck", "Drill Peck", "Tri Attack"],
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    stats: {
      attack: 110,
      defense: 70,
      specialAttack: 60,
      specialDefense: 60,
      speed: 110,
    },
  },
  {
    name: "Seel",
    index: 86,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Headbutt", "Aurora Beam", "Ice Beam"],
    types: [PokemonType.WATER, PokemonType.ICE],
    stats: {
      attack: 45,
      defense: 55,
      specialAttack: 45,
      specialDefense: 50,
      speed: 45,
    },
  },
  {
    name: "Dewgong",
    index: 87,

    currentHp: 360,
    totalHp: 360, // 360
    moves: ["Aurora Beam", "Ice Beam", "Dive"],
    types: [PokemonType.WATER, PokemonType.ICE],
    stats: {
      attack: 70,
      defense: 80,
      specialAttack: 70,
      specialDefense: 95,
      speed: 70,
    },
  },
  {
    name: "Grimer",
    index: 88,

    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Sludge", "Pound"],
    types: [PokemonType.POISON],
    stats: {
      attack: 80,
      defense: 50,
      specialAttack: 40,
      specialDefense: 50,
      speed: 25,
    },
  },
  {
    name: "Muk",
    index: 89,

    currentHp: 420,
    totalHp: 420, // 420
    moves: ["Sludge Bomb", "Gunk Shot", "Poison Jab"],
    types: [PokemonType.POISON],
    stats: {
      attack: 105,
      defense: 75,
      specialAttack: 65,
      specialDefense: 100,
      speed: 50,
    },
  },
  {
    name: "Shellder",
    index: 90,

    currentHp: 120,
    totalHp: 120, // 120
    moves: ["Tackle", "Ice Beam", "Clamp"],
    types: [PokemonType.WATER, PokemonType.ICE],
    stats: {
      attack: 40,
      defense: 100,
      specialAttack: 65,
      specialDefense: 45,
      speed: 55,
    },
  },
  {
    name: "Cloyster",
    index: 91,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Ice Beam", "Hydro Pump", "Clamp", "Aurora Beam"],
    types: [PokemonType.WATER, PokemonType.ICE],
    stats: {
      attack: 95,
      defense: 180,
      specialAttack: 85,
      specialDefense: 85,
      speed: 70,
    },
  },
  {
    name: "Gastly",
    index: 92,

    currentHp: 120,
    totalHp: 120, // 120
    moves: ["Lick", "Shadow Ball"],
    types: [PokemonType.GHOST, PokemonType.POISON],
    stats: {
      attack: 35,
      defense: 30,
      specialAttack: 100,
      specialDefense: 35,
      speed: 80,
    },
  },
  {
    name: "Haunter",
    index: 93,

    currentHp: 180,
    totalHp: 180, // 180
    moves: ["Shadow Ball", "Lick", "Confusion"],
    types: [PokemonType.GHOST, PokemonType.POISON],
    stats: {
      attack: 50,
      defense: 45,
      specialAttack: 115,
      specialDefense: 55,
      speed: 95,
    },
  },
  {
    name: "Gengar",
    index: 94,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Shadow Ball", "Sludge Bomb", "Psychic", "Thunderbolt"],
    types: [PokemonType.GHOST, PokemonType.POISON],
    stats: {
      attack: 65,
      defense: 60,
      specialAttack: 130,
      specialDefense: 75,
      speed: 110,
    },
  },
  {
    name: "Onix",
    index: 95,

    currentHp: 140,
    totalHp: 140, // 140
    moves: ["Tackle", "Rock Throw", "Bind", "Earthquake"],
    types: [PokemonType.ROCK, PokemonType.GROUND],
    stats: {
      attack: 45,
      defense: 160,
      specialAttack: 30,
      specialDefense: 45,
      speed: 70,
    },
  },
  {
    name: "Drowzee",
    index: 96,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Confusion", "Headbutt", "Psybeam"],
    types: [PokemonType.PSYCHIC],
    stats: {
      attack: 48,
      defense: 45,
      specialAttack: 43,
      specialDefense: 90,
      speed: 42,
    },
  },
  {
    name: "Hypno",
    index: 97,

    currentHp: 340,
    totalHp: 340, // 340
    moves: ["Psychic", "Headbutt", "Zen Headbutt"],
    types: [PokemonType.PSYCHIC],
    stats: {
      attack: 73,
      defense: 70,
      specialAttack: 73,
      specialDefense: 115,
      speed: 67,
    },
  },
  {
    name: "Krabby",
    index: 98,

    currentHp: 120,
    totalHp: 120, // 120
    moves: ["Vice Grip", "Bubble"],
    types: [PokemonType.WATER],
    stats: {
      attack: 105,
      defense: 90,
      specialAttack: 25,
      specialDefense: 25,
      speed: 50,
    },
  },
  {
    name: "Kingler",
    index: 99,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Crabhammer", "Vice Grip", "Slam"],
    types: [PokemonType.WATER],
    stats: {
      attack: 130,
      defense: 115,
      specialAttack: 50,
      specialDefense: 50,
      speed: 75,
    },
  },
  {
    name: "Voltorb",
    index: 100,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Tackle", "Thunderbolt"],
    types: [PokemonType.ELECTRIC],
    stats: {
      attack: 30,
      defense: 35,
      specialAttack: 55,
      specialDefense: 35,
      speed: 100,
    },
  },
  {
    name: "Electrode",
    index: 101,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Thunderbolt", "Rollout", "Spark"],
    types: [PokemonType.ELECTRIC],
    stats: {
      attack: 50,
      defense: 50,
      specialAttack: 100,
      specialDefense: 70,
      speed: 150,
    },
  },
  {
    name: "Exeggcute",
    index: 102,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Confusion", "Razor Leaf"],
    types: [PokemonType.GRASS, PokemonType.PSYCHIC],
    stats: {
      attack: 40,
      defense: 35,
      specialAttack: 95,
      specialDefense: 55,
      speed: 40,
    },
  },
  {
    name: "Exeggutor",
    index: 103,

    currentHp: 380,
    totalHp: 380, // 380
    moves: ["Razor Leaf", "Psychic", "Slam"],
    types: [PokemonType.GRASS, PokemonType.PSYCHIC],
    stats: {
      attack: 85,
      defense: 70,
      specialAttack: 125,
      specialDefense: 75,
      speed: 55,
    },
  },
  {
    name: "Cubone",
    index: 104,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Bone Club", "Headbutt"],
    types: [PokemonType.ROCK],
    stats: {
      attack: 50,
      defense: 95,
      specialAttack: 40,
      specialDefense: 50,
      speed: 35,
    },
  },
  {
    name: "Marowak",
    index: 105,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Bone Club", "Bonemerang", "Rock Slide"],
    types: [PokemonType.GROUND],
    stats: {
      attack: 80,
      defense: 110,
      specialAttack: 50,
      specialDefense: 80,
      speed: 45,
    },
  },
  {
    name: "Hitmonlee",
    index: 106,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["High Jump Kick", "Rolling Kick", "Reversal"],
    types: [PokemonType.FIGHTING],
    stats: {
      attack: 120,
      defense: 53,
      specialAttack: 35,
      specialDefense: 110,
      speed: 87,
    },
  },
  {
    name: "Hitmonchan",
    index: 107,

    currentHp: 200,
    totalHp: 200, // 200
    moves: ["Fire Punch", "Ice Punch", "Thunder Punch", "Mega Punch"],
    types: [PokemonType.FIGHTING],
    stats: {
      attack: 105,
      defense: 79,
      specialAttack: 35,
      specialDefense: 110,
      speed: 76,
    },
  },
  {
    name: "Lickitung",
    index: 108,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Lick", "Body Slam", "Mega Punch"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 60,
      defense: 75,
      specialAttack: 60,
      specialDefense: 75,
      speed: 30,
    },
  },
  {
    name: "Koffing",
    index: 109,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Sludge", "Tackle"],
    types: [PokemonType.POISON],
    stats: {
      attack: 60,
      defense: 60,
      specialAttack: 35,
      specialDefense: 45,
      speed: 35,
    },
  },
  {
    name: "Weezing",
    index: 110,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Sludge Bomb", "Flamethrower", "Body Slam"],
    types: [PokemonType.POISON],
    stats: {
      attack: 90,
      defense: 120,
      specialAttack: 85,
      specialDefense: 70,
      speed: 60,
    },
  },
  {
    name: "Rhyhorn",
    index: 111,

    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Horn Attack", "Rock Blast", "Take Down"],
    types: [PokemonType.ROCK, PokemonType.GROUND],
    stats: {
      attack: 85,
      defense: 95,
      specialAttack: 30,
      specialDefense: 30,
      speed: 25,
    },
  },
  {
    name: "Rhydon",
    index: 112,

    currentHp: 420,
    totalHp: 420, // 420
    moves: ["Earthquake", "Rock Slide", "Take Down", "Headbutt"],
    types: [PokemonType.ROCK, PokemonType.GROUND],
    stats: {
      attack: 130,
      defense: 120,
      specialAttack: 45,
      specialDefense: 45,
      speed: 40,
    },
  },
  {
    name: "Chansey",
    index: 113,

    currentHp: 1000,
    totalHp: 1000, // 1000
    moves: ["Seismic Toss", "Thunderbolt", "Ice Beam"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 5,
      defense: 5,
      specialAttack: 35,
      specialDefense: 105,
      speed: 50,
    },
  },
  {
    name: "Tangela",
    index: 114,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Vine Whip", "Solar Beam", "Constrict"],
    types: [PokemonType.GRASS],
    stats: {
      attack: 55,
      defense: 115,
      specialAttack: 100,
      specialDefense: 40,
      speed: 60,
    },
  },
  {
    name: "Kangaskhan",
    index: 115,

    currentHp: 420,
    totalHp: 420, // 420
    moves: ["Comet Punch", "Body Slam", "Hyper Beam"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 95,
      defense: 80,
      specialAttack: 40,
      specialDefense: 80,
      speed: 90,
    },
  },
  {
    name: "Horsea",
    index: 116,

    currentHp: 120,
    totalHp: 120, // 120
    moves: ["Bubble", "Tackle"],
    types: [PokemonType.WATER],
    stats: {
      attack: 40,
      defense: 35,
      specialAttack: 70,
      specialDefense: 25,
      speed: 60,
    },
  },
  {
    name: "Seadra",
    index: 117,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Surf", "Ice Beam", "Dragon Breath", "Headbutt"],
    types: [PokemonType.WATER],
    stats: {
      attack: 65,
      defense: 55,
      specialAttack: 95,
      specialDefense: 45,
      speed: 85,
    },
  },
  {
    name: "Goldeen",
    index: 118,

    currentHp: 180,
    totalHp: 180, // 180
    moves: ["Peck", "Horn Attack", "Waterfall"],
    types: [PokemonType.WATER],
    stats: {
      attack: 67,
      defense: 60,
      specialAttack: 35,
      specialDefense: 50,
      speed: 63,
    },
  },
  {
    name: "Seaking",
    index: 119,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Horn Drill", "Waterfall", "Peck"],
    types: [PokemonType.WATER],
    stats: {
      attack: 92,
      defense: 65,
      specialAttack: 65,
      specialDefense: 80,
      speed: 68,
    },
  },
  {
    name: "Staryu",
    index: 120,

    currentHp: 120,
    totalHp: 120, // 120
    moves: ["Tackle", "BubbleBeam", "Confusion"],
    types: [PokemonType.WATER],
    stats: {
      attack: 45,
      defense: 50,
      specialAttack: 70,
      specialDefense: 55,
      speed: 85,
    },
  },
  {
    name: "Starmie",
    index: 121,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Surf", "Psychic", "Ice Beam"],
    types: [PokemonType.WATER, PokemonType.PSYCHIC],
    stats: {
      attack: 75,
      defense: 85,
      specialAttack: 100,
      specialDefense: 85,
      speed: 115,
    },
  },
  {
    name: "Mr. Mime",
    index: 122,

    currentHp: 160,
    totalHp: 160, // 160
    moves: ["Psychic", "Confusion", "Thunderbolt"],
    types: [PokemonType.PSYCHIC],
    stats: {
      attack: 45,
      defense: 65,
      specialAttack: 100,
      specialDefense: 120,
      speed: 90,
    },
  },
  {
    name: "Scyther",
    index: 123,

    currentHp: 280,
    totalHp: 280, // 280
    moves: ["Fury Cutter", "Quick Attack", "Wing Attack"],
    types: [PokemonType.BUG, PokemonType.FLYING],
    stats: {
      attack: 110,
      defense: 80,
      specialAttack: 55,
      specialDefense: 80,
      speed: 105,
    },
  },
  {
    name: "Jynx",
    index: 124,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Ice Beam", "Psychic", "Body Slam"],
    types: [PokemonType.ICE, PokemonType.PSYCHIC],
    stats: {
      attack: 50,
      defense: 35,
      specialAttack: 115,
      specialDefense: 95,
      speed: 95,
    },
  },
  {
    name: "Electabuzz",
    index: 125,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Thunder Punch", "Thunderbolt", "Quick Attack"],
    types: [PokemonType.ELECTRIC],
    stats: {
      attack: 83,
      defense: 57,
      specialAttack: 95,
      specialDefense: 85,
      speed: 105,
    },
  },
  {
    name: "Magmar",
    index: 126,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Fire Punch", "Flamethrower", "Headbutt"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 95,
      defense: 57,
      specialAttack: 100,
      specialDefense: 85,
      speed: 93,
    },
  },
  {
    name: "Pinsir",
    index: 127,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["X-Scissor", "Vice Grip", "Submission"],
    types: [PokemonType.BUG, PokemonType.FIGHTING],
    stats: {
      attack: 125,
      defense: 100,
      specialAttack: 55,
      specialDefense: 70,
      speed: 85,
    },
  },
  {
    name: "Tauros",
    index: 128,

    currentHp: 300,
    totalHp: 300, // 300
    moves: ["Body Slam", "Hyper Beam", "Tackle"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 100,
      defense: 70,
      specialAttack: 40,
      specialDefense: 70,
      speed: 110,
    },
  },
  {
    name: "Magikarp",
    index: 129,

    currentHp: 80,
    totalHp: 80, // 80
    moves: ["Splash"],
    types: [PokemonType.WATER],
    stats: {
      attack: 10,
      defense: 55,
      specialAttack: 15,
      specialDefense: 20,
      speed: 80,
    },
  },
  {
    name: "Gyarados",
    index: 130,

    currentHp: 380,
    totalHp: 380, // 380
    moves: ["Hydro Pump", "Bite", "Hyper Beam", "DragonBreath"],
    types: [PokemonType.WATER, PokemonType.FLYING],
    stats: {
      attack: 125,
      defense: 79,
      specialAttack: 60,
      specialDefense: 100,
      speed: 81,
    },
  },
  {
    name: "Lapras",
    index: 131,

    currentHp: 520,
    totalHp: 520, // 520
    moves: ["Ice Beam", "Surf", "Psychic", "Slam"],
    types: [PokemonType.WATER, PokemonType.ICE],
    stats: {
      attack: 85,
      defense: 80,
      specialAttack: 85,
      specialDefense: 95,
      speed: 60,
    },
  },
  {
    name: "Ditto",
    index: 132,

    currentHp: 192,
    totalHp: 192, // 192
    moves: ["Tackle"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 48,
      defense: 48,
      specialAttack: 48,
      specialDefense: 48,
      speed: 48,
    },
  },
  {
    name: "Eevee",
    index: 133,

    currentHp: 220,
    totalHp: 220, // 220
    moves: ["Tackle", "Quick Attack"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 55,
      defense: 50,
      specialAttack: 45,
      specialDefense: 65,
      speed: 55,
    },
  },
  {
    name: "Vaporeon",
    index: 134,

    currentHp: 520,
    totalHp: 130 * 4, // 520
    moves: ["Surf", "Ice Beam", "Water Gun", "Headbutt"],
    types: [PokemonType.WATER],
    stats: {
      attack: 65,
      defense: 60,
      specialAttack: 110,
      specialDefense: 95,
      speed: 65,
    },
  },
  {
    name: "Jolteon",
    index: 135,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Thunderbolt", "Thunder Wave", "Quick Attack"],
    types: [PokemonType.ELECTRIC],
    stats: {
      attack: 65,
      defense: 60,
      specialAttack: 110,
      specialDefense: 95,
      speed: 130,
    },
  },
  {
    name: "Flareon",
    index: 136,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Flamethrower", "Fire Spin", "Quick Attack"],
    types: [PokemonType.FIRE],
    stats: {
      attack: 130,
      defense: 60,
      specialAttack: 95,
      specialDefense: 110,
      speed: 65,
    },
  },
  {
    name: "Porygon",
    index: 137,

    currentHp: 260,
    totalHp: 260, // 260
    moves: ["Tackle", "Psybeam", "Headbutt"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 60,
      defense: 70,
      specialAttack: 85,
      specialDefense: 75,
      speed: 40,
    },
  },
  {
    name: "Omanyte",
    index: 138,

    currentHp: 140,
    totalHp: 140, // 140
    moves: ["Bubble", "Water Gun", "Rock Slide"],
    types: [PokemonType.ROCK, PokemonType.WATER],
    stats: {
      attack: 40,
      defense: 100,
      specialAttack: 90,
      specialDefense: 55,
      speed: 35,
    },
  },
  {
    name: "Omastar",
    index: 139,

    currentHp: 280,
    totalHp: 280, // 280
    moves: ["Hydro Pump", "Rock Slide", "Ice Beam", "Tackle"],
    types: [PokemonType.ROCK, PokemonType.WATER],
    stats: {
      attack: 60,
      defense: 125,
      specialAttack: 115,
      specialDefense: 70,
      speed: 55,
    },
  },
  {
    name: "Kabuto",
    index: 140,

    currentHp: 120,
    totalHp: 120, // 120
    moves: ["Scratch", "Water Gun", "Mud Shot"],
    types: [PokemonType.ROCK, PokemonType.WATER],
    stats: {
      attack: 40,
      defense: 35,
      specialAttack: 50,
      specialDefense: 55,
      speed: 55,
    },
  },
  {
    name: "Kabutops",
    index: 141,

    currentHp: 240,
    totalHp: 240, // 240
    moves: ["Rock Throw", "Slash", "Waterfall", "Headbutt"],
    types: [PokemonType.ROCK, PokemonType.WATER],
    stats: {
      attack: 115,
      defense: 105,
      specialAttack: 65,
      specialDefense: 70,
      speed: 80,
    },
  },
  {
    name: "Aerodactyl",
    index: 142,

    currentHp: 320,
    totalHp: 320, // 320
    moves: ["Hyper Beam", "Aerial Ace", "Rock Slide", "Wing Attack"],
    types: [PokemonType.ROCK, PokemonType.FLYING],
    stats: {
      attack: 105,
      defense: 65,
      specialAttack: 60,
      specialDefense: 75,
      speed: 130,
    },
  },
  {
    name: "Snorlax",
    index: 143,

    currentHp: 640,
    totalHp: 640, // 640
    moves: ["Body Slam", "Hyper Beam", "Headbutt", "Earthquake"],
    types: [PokemonType.NORMAL],
    stats: {
      attack: 110,
      defense: 65,
      specialAttack: 65,
      specialDefense: 110,
      speed: 30,
    },
  },
  {
    name: "Articuno",
    index: 144,

    currentHp: 360,
    totalHp: 360, // 360
    moves: ["Ice Beam", "Blizzard", "Hurricane", "Wing Attack"],
    types: [PokemonType.ICE, PokemonType.FLYING],
    stats: {
      attack: 70,
      defense: 100,
      specialAttack: 125,
      specialDefense: 95,
      speed: 85,
    },
  },
  {
    name: "Zapdos",
    index: 145,

    currentHp: 360,
    totalHp: 360, // 360
    moves: ["Thunderbolt", "Drill Peck", "Thunder", "Wing Attack"],
    types: [PokemonType.ELECTRIC, PokemonType.FLYING],
    stats: {
      attack: 90,
      defense: 85,
      specialAttack: 125,
      specialDefense: 90,
      speed: 100,
    },
  },
  {
    name: "Moltres",
    index: 146,

    currentHp: 360,
    totalHp: 360, // 360
    moves: ["Flamethrower", "Fire Blast", "Sky Attack", "Wing Attack"],
    types: [PokemonType.FIRE, PokemonType.FLYING],
    stats: {
      attack: 100,
      defense: 90,
      specialAttack: 125,
      specialDefense: 85,
      speed: 90,
    },
  },
  {
    name: "Dratini",
    index: 147,

    currentHp: 164,
    totalHp: 164, // 164
    moves: ["Wrap", "Dragon Rage"],
    types: [PokemonType.DRAGON],
    stats: {
      attack: 52,
      defense: 43,
      specialAttack: 50,
      specialDefense: 50,
      speed: 50,
    },
  },
  {
    name: "Dragonair",
    index: 148,

    currentHp: 244,
    totalHp: 244, // 244
    moves: ["Dragon Tail", "Dragon Rage", "Slam"],
    types: [PokemonType.DRAGON],
    stats: {
      attack: 84,
      defense: 65,
      specialAttack: 70,
      specialDefense: 70,
      speed: 70,
    },
  },
  {
    name: "Dragonite",
    index: 149,

    currentHp: 364,
    totalHp: 364, // 364
    moves: ["Hyper Beam", "Outrage", "Dragon Claw", "Wing Attack"],
    types: [PokemonType.DRAGON, PokemonType.FLYING],
    stats: {
      attack: 134,
      defense: 95,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
  },
  {
    name: "Mewtwo",
    index: 150,

    currentHp: 424,
    totalHp: 424, // 424
    moves: ["Psychic", "Ice Beam", "Hyper Beam", "Thunderbolt"],
    types: [PokemonType.PSYCHIC],
    stats: {
      attack: 110,
      defense: 90,
      specialAttack: 154,
      specialDefense: 90,
      speed: 130,
    },
  },
  {
    name: "Mew",
    index: 151,

    currentHp: 400,
    totalHp: 400, // 400
    moves: ["Psychic", "Ancient Power", "Hyper Beam", "Flamethrower"],
    types: [PokemonType.PSYCHIC],
    stats: {
      attack: 100,
      defense: 100,
      specialAttack: 100,
      specialDefense: 100,
      speed: 100,
    },
  },
];

export default pokemonData;
