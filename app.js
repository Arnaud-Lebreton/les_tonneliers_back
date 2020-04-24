/***** Constantes modules *****/
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

/***** Constantes middlewares *****/
const cors = require("./middlewares/cors");

/***** Constantes Routeurs *****/
const connexion = require("./routes/connexion");
const appartement = require("./routes/appartement");
const menu = require("./routes/menu");
const reservation = require("./routes/reservation");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors.handle);

/***** Lancement des Routeurs *****/
app.use("/connexion", connexion);
app.use("/appartement", appartement);
app.use("/menu", menu);
app.use("/reservation", reservation);

module.exports = app;
