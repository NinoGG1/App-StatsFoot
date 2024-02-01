const mongoose = require("mongoose");
const LeagueModel = require("../models/league.model");

exports.getLeagues = async (req, res) => {
  try {
    const leagues = await LeagueModel.find();
    res.json(leagues);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving leagues data");
  }
};
