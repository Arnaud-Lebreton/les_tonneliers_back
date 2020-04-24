const mongoose = require("mongoose");

const SchemaReservation = mongoose.Schema({
  arrivee: String,
  depart: String,
  nbVoyageurs: Number,
  fraisMenage: Number,
  fraisService: Number,
  taxeSejour: Number,
  totalResa: Number,
  restantDu: Number,
});

const SchemaClients = mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  tel: String,
  mdp: String,
  message: String,
  reservation: [SchemaReservation],
});

module.exports = mongoose.model("Clients", SchemaClients);
