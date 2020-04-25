const express = require("express");
const routerReservation = express.Router();
const controllerReservation = require("../controllers/reservation");

routerReservation.get("/", controllerReservation.dataReservationApp);

routerReservation.post("/", controllerReservation.dataReservationClients);

routerReservation.post("/confirmation", controllerReservation.dataConfirmationClients);

routerReservation.put("/confirmation", controllerReservation.dataConfirmationRestantDu);


module.exports = routerReservation;
