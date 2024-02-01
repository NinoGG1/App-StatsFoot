const express = require("express");
const router = express.Router();
const { setFixture } = require("../controllers/fixtures.controller");
const { setTeams } = require("../controllers/teams.controller");

router.get("/fixtures", setFixture);
router.get("/teams/:id", setTeams);

module.exports = router;
