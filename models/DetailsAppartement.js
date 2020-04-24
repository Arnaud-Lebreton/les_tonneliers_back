const mongoose = require("mongoose");

const requestDetailsAppartement = mongoose.model("requestDetailsAppartement", {
  nomApp: String,
  descPage1App: String,
  caracApp: String,
  noteApp: String,
  imgApp: Array,
  descPage2App: String,
  equipApp: Array,
  prixNuit: Number,
  dateIndisp: Array,
});

module.exports = requestDetailsAppartement;
