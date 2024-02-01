const axios = require("axios");
const TeamModel = require("../models/team.model");
require("dotenv").config();

module.exports.setTeams = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios({
      method: "GET",
      url: "https://v3.football.api-sports.io/teams/",
      params: {
        league: id,
        season: "2023",
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
      },
    });

    const teamData = response.data.response;
    const results = [];

    // Parcourez chaque objet dans le tableau
    for (let data of teamData) {
      // Créez un objet qui contient les données que vous voulez stocker
      const team = {
        id_team: data.team.id,
        name: data.team.name,
        code: data.team.code,
        logo: data.team.logo,
        league_id: req.params.id,
      };

      // Mettez à jour le document existant ou insérez un nouveau document
      const result = await TeamModel.findOneAndUpdate(
        { id_team: team.id_team },
        team,
        {
          upsert: true,
          new: true,
        }
      );

      results.push(result);
    }

    res.json(results);
    console.log("Teams mises à jour");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

module.exports.getTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find(); // Supprimez le critère de recherche
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

module.exports.getTeam = async (req, res) => {
  try {
    const team = await TeamModel.findOne({ id_team: req.params.id });
    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

module.exports.getTeamByName = async (req, res) => {
  try {
    const team = await TeamModel.findOne({ name: req.params.name });
    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

module.exports.getTeamByCode = async (req, res) => {
  try {
    const team = await TeamModel.findOne({ code: req.params.code });
    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};
