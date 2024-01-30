const { default: axios } = require("axios");
const FixtureModel = require("../models/fixture.model");

module.exports.setFixture = async (req, res) => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://v3.football.api-sports.io/fixtures/",
      params: {
        league: "61",
        season: "2023",
      },
      headers: {
        "X-RapidAPI-Key": "1e61f40278b492243dd860f58c8d7540",
        "X-RapidAPI-Host": "v3.football.api-sports.io",
      },
    });

    const fixtureData = response.data.response;
    const results = [];

    // Parcourez chaque objet dans le tableau
    for (let data of fixtureData) {
      // Créez un objet qui contient les données que vous voulez stocker
      const fixture = {
        id: data.fixture.id,
        date: data.fixture.date,
        league: data.league.name,
        round: data.league.round,
        homeTeam: data.teams.home.name,
        awayTeam: data.teams.away.name,
        homeGoals: data.goals.home,
        awayGoals: data.goals.away,
        homePenalties: data.score.penalty.home,
        awayPenalties: data.score.penalty.away,
        status: data.fixture.status.long,
      };

      // Mettez à jour le document existant ou insérez un nouveau document
      const result = await FixtureModel.findOneAndUpdate(
        { id: fixture.id },
        fixture,
        {
          upsert: true,
          new: true,
        }
      );

      results.push(result);
    }

    res.json(results);
    console.log("Fixtures mises à jour");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

module.exports.getFixtures = async (req, res) => {
  try {
    const fixtures = await FixtureModel.find();
    res.json(fixtures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};
