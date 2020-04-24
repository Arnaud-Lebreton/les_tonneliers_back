const mongoose = require("mongoose");

const requestAppartement = mongoose.model("requestAppartement", {
  historique: String,
  ville: String,
  concept: String,
  fraisMenage: Number,
  fraisService: Number,
  taxeSejour: Number,
  appartements: Array,
});

module.exports = requestAppartement;