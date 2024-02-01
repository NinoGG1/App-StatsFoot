const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  id_team: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  logo: {
    type: String,
    required: true,
  },
  league_id: {
    type: Number,
    required: true,
  },
});

const TeamModel = mongoose.model("Team", TeamSchema);

module.exports = TeamModel;
