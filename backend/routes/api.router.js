const express = require("express");
const router = express.Router();
const { setFixture } = require("../controllers/fixtures.controller");

router.get("/", setFixture);

module.exports = router;
