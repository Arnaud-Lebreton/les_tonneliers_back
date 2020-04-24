const express = require("express");
const routerConnexion = express.Router();
const controllerConnexion = require("../controllers/connexion");

routerConnexion.get("/", controllerConnexion.dataConnexion);

routerConnexion.post("/", controllerConnexion.dataConnexionForm);

routerConnexion.post("/inscription", controllerConnexion.dataInscription);

routerConnexion.post("/mdp", controllerConnexion.dataMdp);

module.exports = routerConnexion;
