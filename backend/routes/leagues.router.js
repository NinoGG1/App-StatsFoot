const express = require("express");
const router = express.Router();
const { getLeagues } = require("../controllers/leagues.controller");

router.get("/", getLeagues);

module.exports = router;
