const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  battles: {
    type: Number,
    default: 0,
  },
  wins: {
    type: Number,
    default: 0,
  },
  losses: {
    type: Number,
    default: 0,
  },
  team: {
    type: [String], // Assuming 'team' is an array of Pokémon names or IDs
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
