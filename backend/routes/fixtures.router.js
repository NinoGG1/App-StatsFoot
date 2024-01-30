const express = require("express");
const router = express.Router();
const { getFixtures } = require("../controllers/fixtures.controller");

router.get("/", getFixtures);

router.delete("/", (req, res) => {
  res.json({ message: "Tous les fixtures sont supprimés" });
});

module.exports = router;
