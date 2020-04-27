/*
 * Controlleur Appartement
 */

//Import
const Appartement = require("../models/Appartement");

const controllerAppartement = {
  // Page 1 : Récupération info appartement (sans filtre)
  dataAppartement: (req, res) => {
    Appartement.find(
      {},
      "nomApp descPage1App caracApp noteApp imgApp",
      (err, data) => {
        if (err) {
          res.status(500).json({});
          return;
        }
        res.json(data);
      }
    );
  },

  // Page 2 : Récupération info appartement (avec filtre de recherche sur l'Id)
  dataAppartementDetails: (req, res) => {
    let recherche = req.query.id; //récupérer la variable depuis le front
    console.log(recherche);
    Appartement.findOne({ _id: recherche }, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json(data);
    });
  },

  // Page 2 : Récupération info NomApp/img (sans filtre)
  dataAppartementAutres: (req, res) => {
    Appartement.find({}, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json(data);
    });
  },
};
module.exports = controllerAppartement;
