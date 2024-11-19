import { BattlePokemon } from "../types";

const pokemonData: BattlePokemon[] = [
  {
    name: "Bulbasaur",
    index: 1,
    isActive: false,
    currentHp: 45,
    totalHp: 45 * 4, // 180
    moves: ["Tackle", "Vine Whip"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Tackle", "Vine Whip"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["Razor Leaf", "Sludge Bomb", "Earthquake", "Body Slam"],
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
    isActive: false,
    currentHp: 39,
    totalHp: 39 * 4, // 156
    moves: ["Scratch", "Ember"],
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
    isActive: false,
    currentHp: 58,
    totalHp: 58 * 4, // 232
    moves: ["Flamethrower", "Dragon Claw", "Slash", "Scratch"],
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
    isActive: false,
    currentHp: 78,
    totalHp: 78 * 4, // 312
    moves: ["Flamethrower", "Dragon Claw", "Air Slash", "Heat Wave"],
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
    isActive: false,
    currentHp: 44,
    totalHp: 44 * 4, // 176
    moves: ["Tackle", "Water Gun", "Bubble"],
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
    isActive: false,
    currentHp: 59,
    totalHp: 59 * 4, // 236
    moves: ["Tackle", "Water Gun", "Ice punch", "Bubble"],
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
    isActive: false,
    currentHp: 79,
    totalHp: 79 * 4, // 316
    moves: ["Hydro Pump", "Skull Bash", "Ice Beam", "Surf"],
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
    isActive: false,
    currentHp: 45,
    totalHp: 45 * 4, // 180
    moves: ["Tackle"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Tackle"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Gust", "Confusion", "Psybeam", "Tackle"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Poison Sting"],
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
    isActive: false,
    currentHp: 45,
    totalHp: 45 * 4, // 180
    moves: ["Poison Sting"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Fury Attack", "Twinneedle", "Rage", "Poison Sting"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Tackle", "Peck", "Gust", "Quick Attack"],
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
    isActive: false,
    currentHp: 63,
    totalHp: 63 * 4, // 252
    moves: ["Gust", "Quick Attack", "Tackle", "Wing Attack"],
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
    isActive: false,
    currentHp: 83,
    totalHp: 83 * 4, // 332
    moves: ["Wing Attack", "Quick Attack", "Tackle", "Hyper Beam"],
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
    isActive: false,
    currentHp: 30,
    totalHp: 30 * 4, // 120
    moves: ["Tackle", "Scratch", "Quick Attack", "Bite"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Hyper Fang", "Quick Attack", "Bite", "Headbutt"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Peck", "Tackle", "Bite", "Fury Attack"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Drill Peck", "Fury Attack", "Headbutt", "Bite"],
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
    isActive: false,
    currentHp: 35,
    totalHp: 35 * 4, // 140
    moves: ["Wrap", "Poison Sting", "Bite", "Slam"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Bite", "Poison Jab", "Headbutt", "Slam"],
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
    isActive: false,
    currentHp: 35,
    totalHp: 35 * 4, // 140
    moves: ["Thunder Shock", "Quick Attack", "Iron Tail", "Electro Ball"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Thunder Punch", "Thunderbolt", "Quick Attack", "Iron Tail"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Scratch", "Quick Attack", "Tackle", "Poison Sting"],
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
    isActive: false,
    currentHp: 75,
    totalHp: 75 * 4, // 300
    moves: ["Slash", "Earthquake", "Fury Swipes", "Scratch"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Scratch", "Poison Sting", "Double Kick", "Headbutt"],
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
    isActive: false,
    currentHp: 70,
    totalHp: 70 * 4, // 280
    moves: ["Bite", "Double Kick", "Poison Sting", "Headbutt"],
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
    isActive: false,
    currentHp: 90,
    totalHp: 90 * 4, // 360
    moves: ["Body Slam", "Earthquake", "Double Kick", "Poison Sting"],
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
    isActive: false,
    currentHp: 46,
    totalHp: 46 * 4, // 184
    moves: ["Poison Sting", "Tackle"],
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
    isActive: false,
    currentHp: 61,
    totalHp: 61 * 4, // 244
    moves: ["Horn Attack", "Poison Sting", "Double Kick", "Fury Attack"],
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
    isActive: false,
    currentHp: 81,
    totalHp: 81 * 4, // 324
    moves: ["Earthquake", "Horn Drill", "Double Kick", "Poison Sting"],
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
    isActive: false,
    currentHp: 70,
    totalHp: 70 * 4, // 280
    moves: ["Pound", "Double Slap"],
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
    isActive: false,
    currentHp: 95,
    totalHp: 95 * 4, // 380
    moves: ["Moonblast", "Body Slam", "Pound", "Double Slap"],
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
    isActive: false,
    currentHp: 38,
    totalHp: 38 * 4, // 152
    moves: ["Quick Attack", "Ember"],
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
    isActive: false,
    currentHp: 73,
    totalHp: 73 * 4, // 292
    moves: ["Flamethrower", "Quick Attack", "Fire Blast", "Iron Tail"],
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
    isActive: false,
    currentHp: 115,
    totalHp: 115 * 4, // 460
    moves: ["Pound", "Rollout"],
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
    isActive: false,
    currentHp: 140,
    totalHp: 140 * 4, // 560
    moves: ["Hyper Voice", "Slam", "Rollout", "Pound"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Leech Life", "Astonish", "Bite"],
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
    isActive: false,
    currentHp: 75,
    totalHp: 75 * 4, // 300
    moves: ["Bite", "Wing Attack", "Astonish", "Poison Fang"],
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
    isActive: false,
    currentHp: 45,
    totalHp: 45 * 4, // 180
    moves: ["Vine Whip", "Acid"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Acid", "Vine Whip", "Sludge"],
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
    isActive: false,
    currentHp: 75,
    totalHp: 75 * 4, // 300
    moves: ["SolarBeam", "Sludge Bomb", "Razor Leaf", "Acid"],
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
    isActive: false,
    currentHp: 35,
    totalHp: 35 * 4, // 140
    moves: ["Scratch", "Leech Life"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Headbutt", "Leech Life", "Slam", "Slash"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Tackle", "Confusion"],
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
    isActive: false,
    currentHp: 70,
    totalHp: 70 * 4, // 280
    moves: ["Poison Fang", "Psychic", "Leech Life", "Tackle"],
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
    isActive: false,
    currentHp: 10,
    totalHp: 10 * 4, // 40
    moves: ["Scratch", "Rock Throw"],
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
    isActive: false,
    currentHp: 35,
    totalHp: 35 * 4, // 140
    moves: ["Dig", "Slash"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Bite", "Scratch", "Fury Swipes"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Bite", "Slash", "Fury Swipes"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Confusion", "Water Gun"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["Psychic", "Water Gun", "Confusion", "Aqua Tail"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Low Kick", "Karate Chop", "Scratch"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Low Kick", "Karate Chop", "Seismic Toss", "Hyper Beam"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Bite", "Ember", "Take Down"],
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
    isActive: false,
    currentHp: 90,
    totalHp: 90 * 4, // 360
    moves: ["Flamethrower", "Bite", "Take Down", "Wild Charge"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Water Gun", "Tackle"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Water Gun", "Tackle", "BubbleBeam", "Body Slam"],
    stats: {
      attack: 65,
      defense: 65,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
    },
  },
  {
    name: "Politoed",
    index: 62,
    isActive: false,
    currentHp: 90,
    totalHp: 90 * 4, // 360
    moves: ["Hydro Pump", "Body Slam", "BubbleBeam"],
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
    isActive: false,
    currentHp: 25,
    totalHp: 25 * 4, // 100
    moves: ["Confusion"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Confusion", "Psybeam"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Psychic", "Shadow Ball", "Confusion", "Psybeam"],
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
    isActive: false,
    currentHp: 70,
    totalHp: 70 * 4, // 280
    moves: ["Low Kick", "Karate Chop", "Seismic Toss", "Rock Slide"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["Low Kick", "Karate Chop", "Seismic Toss", "Submission"],
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
    isActive: false,
    currentHp: 90,
    totalHp: 90 * 4, // 360
    moves: ["Low Kick", "Karate Chop", "Seismic Toss", "Dynamic Punch"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Vine Whip", "Acid"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Vine Whip", "Acid", "Razor Leaf"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["SolarBeam", "Acid", "Sludge Bomb", "Razor Leaf"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Poison Sting", "Acid", "BubbleBeam"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["Poison Sting", "Acid", "Sludge Bomb", "Hydro Pump"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Tackle", "Rock Throw", "Magnitutde"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Rock Throw", "Magnitude", "Earthquake"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["Earthquake", "Rock Slide", "Explosion"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Ember", "Stomp", "Fire Spin"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Flamethrower", "Stomp", "Fire Spin"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Water Gun", "Confusion", "Tackle"],
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
    isActive: false,
    currentHp: 95,
    totalHp: 95 * 4, // 380
    moves: ["Psychic", "Surf", "Water Gun"],
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
    isActive: false,
    currentHp: 25,
    totalHp: 25 * 4, // 100
    moves: ["Thunder Shock", "Magnet Bomb"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Thunderbolt", "Magnet Bomb", "Flash Cannon"],
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
    isActive: false,
    currentHp: 52,
    totalHp: 52 * 4, // 208
    moves: ["Peck", "Aerial Ace", "Fury Cutter"],
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
    isActive: false,
    currentHp: 35,
    totalHp: 35 * 4, // 140
    moves: ["Peck", "Drill Peck"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Peck", "Drill Peck", "Tri Attack"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Headbutt", "Aurora Beam", "Ice Beam"],
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
    isActive: false,
    currentHp: 90,
    totalHp: 90 * 4, // 360
    moves: ["Aurora Beam", "Ice Beam", "Dive"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["Sludge", "Pound"],
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
    isActive: false,
    currentHp: 105,
    totalHp: 105 * 4, // 420
    moves: ["Sludge Bomb", "Gunk Shot", "Poison Jab"],
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
    isActive: false,
    currentHp: 30,
    totalHp: 30 * 4, // 120
    moves: ["Tackle", "Ice Beam", "Clamp"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Ice Beam", "Hydro Pump", "Clamp", "Aurora Beam"],
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
    isActive: false,
    currentHp: 30,
    totalHp: 30 * 4, // 120
    moves: ["Lick", "Shadow Ball"],
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
    isActive: false,
    currentHp: 45,
    totalHp: 45 * 4, // 180
    moves: ["Shadow Ball", "Lick", "Confusion"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Shadow Ball", "Sludge Bomb", "Psychic", "Thunderbolt"],
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
    isActive: false,
    currentHp: 35,
    totalHp: 35 * 4, // 140
    moves: ["Tackle", "Rock Throw", "Bind", "Earthquake"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Confusion", "Headbutt", "Psybeam"],
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
    isActive: false,
    currentHp: 85,
    totalHp: 85 * 4, // 340
    moves: ["Psychic", "Headbutt", "Zen Headbutt"],
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
    isActive: false,
    currentHp: 30,
    totalHp: 30 * 4, // 120
    moves: ["Vice Grip", "Bubble"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Crabhammer", "Vice Grip", "Slam"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Tackle", "Thunderbolt"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Thunderbolt", "Rollout", "Spark"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Confusion", "Razor Leaf"],
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
    isActive: false,
    currentHp: 95,
    totalHp: 95 * 4, // 380
    moves: ["Razor Leaf", "Psychic", "Slam"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Bone Club", "Headbutt"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Bone Club", "Bonemerang", "Rock Slide"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["High Jump Kick", "Rolling Kick", "Reversal"],
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
    isActive: false,
    currentHp: 50,
    totalHp: 50 * 4, // 200
    moves: ["Fire Punch", "Ice Punch", "Thunder Punch", "Mega Punch"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Lick", "Body Slam", "Mega Punch"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Sludge", "Tackle"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Sludge Bomb", "Flamethrower", "Body Slam"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["Horn Attack", "Rock Blast", "Take Down"],
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
    isActive: false,
    currentHp: 105,
    totalHp: 105 * 4, // 420
    moves: ["Earthquake", "Rock Slide", "Take Down", "Headbutt"],
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
    isActive: false,
    currentHp: 250,
    totalHp: 250 * 4, // 1000
    moves: ["Seismic Toss", "Thunderbolt", "Ice Beam"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Vine Whip", "SolarBeam", "Constrict"],
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
    isActive: false,
    currentHp: 105,
    totalHp: 105 * 4, // 420
    moves: ["Comet Punch", "Body Slam", "Hyper Beam"],
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
    isActive: false,
    currentHp: 30,
    totalHp: 30 * 4, // 120
    moves: ["Bubble", "Tackle"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Surf", "Ice Beam", "Dragon Breath", "Headbutt"],
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
    isActive: false,
    currentHp: 45,
    totalHp: 45 * 4, // 180
    moves: ["Peck", "Horn Attack", "Waterfall"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Horn Drill", "Waterfall", "Peck"],
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
    isActive: false,
    currentHp: 30,
    totalHp: 30 * 4, // 120
    moves: ["Tackle", "BubbleBeam", "Confusion"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Surf", "Psychic", "Ice Beam"],
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
    isActive: false,
    currentHp: 40,
    totalHp: 40 * 4, // 160
    moves: ["Psychic", "Confusion", "Thunderbolt"],
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
    isActive: false,
    currentHp: 70,
    totalHp: 70 * 4, // 280
    moves: ["Fury Cutter", "Quick Attack", "Wing Attack"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Ice Beam", "Psychic", "Body Slam"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Thunder Punch", "Thunderbolt", "Quick Attack"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Fire Punch", "Flamethrower", "Headbutt"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["X-Scissor", "Vice Grip", "Submission"],
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
    isActive: false,
    currentHp: 75,
    totalHp: 75 * 4, // 300
    moves: ["Body Slam", "Hyper Beam", "Tackle"],
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
    isActive: false,
    currentHp: 20,
    totalHp: 20 * 4, // 80
    moves: ["Splash"],
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
    isActive: false,
    currentHp: 95,
    totalHp: 95 * 4, // 380
    moves: ["Hydro Pump", "Bite", "Hyper Beam", "DragonBreath"],
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
    isActive: false,
    currentHp: 130,
    totalHp: 130 * 4, // 520
    moves: ["Ice Beam", "Surf", "Psychic", "Slam"],
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
    isActive: false,
    currentHp: 48,
    totalHp: 48 * 4, // 192
    moves: ["Transform"],
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
    isActive: false,
    currentHp: 55,
    totalHp: 55 * 4, // 220
    moves: ["Tackle", "Quick Attack"],
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
    isActive: false,
    currentHp: 130,
    totalHp: 130 * 4, // 520
    moves: ["Surf", "Ice Beam", "Water Gun", "Headbutt"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Thunderbolt", "Thunder Wave", "Quick Attack"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Flamethrower", "Fire Spin", "Quick Attack"],
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
    isActive: false,
    currentHp: 65,
    totalHp: 65 * 4, // 260
    moves: ["Tackle", "Psybeam", "Headbutt"],
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
    isActive: false,
    currentHp: 35,
    totalHp: 35 * 4, // 140
    moves: ["Bubble", "Water Gun", "Rock Slide"],
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
    isActive: false,
    currentHp: 70,
    totalHp: 70 * 4, // 280
    moves: ["Hydro Pump", "Rock Slide", "Ice Beam", "Tackle"],
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
    isActive: false,
    currentHp: 30,
    totalHp: 30 * 4, // 120
    moves: ["Scratch", "Water Gun", "Mud Shot"],
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
    isActive: false,
    currentHp: 60,
    totalHp: 60 * 4, // 240
    moves: ["Rock Throw", "Slash", "Waterfall", "Headbutt"],
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
    isActive: false,
    currentHp: 80,
    totalHp: 80 * 4, // 320
    moves: ["Hyper Beam", "Aerial Ace", "Rock Slide", "Wing Attack"],
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
    isActive: false,
    currentHp: 160,
    totalHp: 160 * 4, // 640
    moves: ["Body Slam", "Hyper Beam", "Headbutt", "Earthquake"],
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
    isActive: false,
    currentHp: 90,
    totalHp: 90 * 4, // 360
    moves: ["Ice Beam", "Blizzard", "Hurricane", "Wing Attack"],
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
    isActive: false,
    currentHp: 90,
    totalHp: 90 * 4, // 360
    moves: ["Thunderbolt", "Drill Peck", "Thunder", "Wing Attack"],
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
    isActive: false,
    currentHp: 90,
    totalHp: 90 * 4, // 360
    moves: ["Flamethrower", "Fire Blast", "Sky Attack", "Wing Attack"],
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
    isActive: false,
    currentHp: 41,
    totalHp: 41 * 4, // 164
    moves: ["Wrap", "Dragon Rage"],
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
    isActive: false,
    currentHp: 61,
    totalHp: 61 * 4, // 244
    moves: ["Dragon Tail", "Dragon Rage", "Slam"],
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
    isActive: false,
    currentHp: 91,
    totalHp: 91 * 4, // 364
    moves: ["Hyper Beam", "Outrage", "Dragon Claw", "Wing Attack"],
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
    isActive: false,
    currentHp: 106,
    totalHp: 106 * 4, // 424
    moves: ["Psychic", "Ice Beam", "Hyper Beam", "Thunderbolt"],
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
    isActive: false,
    currentHp: 100,
    totalHp: 100 * 4, // 400
    moves: ["Psychic", "Ancient Power", "Hyper Beam", "Flamethrower"],
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