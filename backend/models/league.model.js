const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  logo: {
    type: String,
    required: true,
  },
});

const LeagueModel = mongoose.model("League", LeagueSchema);

module.exports = LeagueModel;
