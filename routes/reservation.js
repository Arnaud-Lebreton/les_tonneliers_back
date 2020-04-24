const express = require("express");
const routerReservation = express.Router();
const controllerReservation = require("../controllers/reservation");

routerReservation.get("/", controllerReservation.dataReservation);

routerReservation.post("/confirmation", controllerReservation.dataConfirmation);

module.exports = routerReservation;
