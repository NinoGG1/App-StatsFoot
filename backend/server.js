const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5001;
const cors = require("cors");

// Connexion à la base de données
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route API vers DB
app.use("/api/fixtures", require("./routes/api.router"));

// Routes DB vers App
app.use("/fixtures", require("./routes/fixtures.router"));

// Lancement du serveur
app.listen(port, () => console.log("Serveur démarré au port : " + port));
