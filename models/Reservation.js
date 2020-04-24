const mongoose = require("mongoose");

const requestReservation = mongoose.model("requestReservation", {
  arrivee: Date,
  depart: Date,
  nbVoyageurs: Number,
  fraisMenage: Number,
  fraisService: Number,
  taxeSejour: Number,
  totalResa: Number,
  restantDu: Number,
});

module.exports = requestReservation;
