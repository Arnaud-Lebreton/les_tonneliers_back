const mongoose = require("mongoose");

const SchemaImage = new mongoose.Schema({
  image: String,
});

const SchemaEquipement = new mongoose.Schema({
  equipement: String,
});

const SchemaDateIndispo = new mongoose.Schema({
  dateDebut: String,
  dateFin: String,
});

const SchemaAppartement = new mongoose.Schema({
  nomApp: String,
  descPage1App: String,
  caracApp: String,
  noteApp: String,
  imgApp: [SchemaImage],
  descPage2App: String,
  equipApp: [SchemaEquipement],
  prixNuit: Number,
  dateIndisp: [SchemaDateIndispo],
});

module.exports = mongoose.model("Appartement", SchemaAppartement);
