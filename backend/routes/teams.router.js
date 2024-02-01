const express = require("express");
const { getTeams } = require("../controllers/teams.controller");
const router = express.Router();

router.get("/", getTeams);

module.exports = router;
