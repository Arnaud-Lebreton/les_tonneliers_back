/*
 * Controlleur Appartement
 */

//Import
const Appartement = require("../models/Appartement");

const controllerAppartement = {
  // Page 1 : Récupération info appartement (sans filtre)
  dataAppartement: (req, res) => {
    Appartement.find({}, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      let dataTable = [];
      for (let i = 0; i < data.length; i++) {
        let liste = {
          nomApp: data[i].nomApp,
          descPage1App: data[i].descPage1App,
          caracApp: data[i].caracApp,
          noteApp: data[i].noteApp,
          imgApp: data[i].imgApp,
        };
        dataTable.push(liste);
      }
      res.json(dataTable);
    });
  },

  // Page 2 : Récupération info appartement (avec filtre de recherche nomApp)
  dataAppartementDetails: (req, res) => {
    let recherche = "Le Chambertin";
    Appartement.find({ nomApp: recherche }, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      let dataTable = [];
      for (let i = 0; i < data.length; i++) {
        let liste = {
          nomApp: data[i].nomApp,
          descPage2App: data[i].descPage2App,
          equipApp: data[i].equipApp,
          imgApp: data[i].imgApp,
          prixNuit: data[i].prixNuit,
          dateIndisp: data[i].dateIndisp,
        };
        dataTable.push(liste);
      }
      res.json(dataTable);
    });
  },

  // Page 2 : Récupération info NomApp/img (sans filtre)
  dataAppartementAutres: (req, res) => {
    Appartement.find({}, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      let dataTable = [];
      for (let i = 0; i < data.length; i++) {
        let liste = {
          nomApp: data[i].nomApp,
          imgApp: data[i].imgApp,
        };
        dataTable.push(liste);
      }
      res.json(dataTable);
    });
  },
};
module.exports = controllerAppartement;
