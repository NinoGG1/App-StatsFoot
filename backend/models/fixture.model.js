const mongoose = require("mongoose");

const fixtureSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  league: {
    type: String,
    required: true,
  },
  round: {
    type: String,
    required: true,
  },
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  homeGoals: {
    type: Number,
    required: false,
  },
  awayGoals: {
    type: Number,
    required: false,
  },
  homePenalties: {
    type: Number,
    required: false,
  },
  awayPenalties: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  leagueId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Fixture", fixtureSchema);
