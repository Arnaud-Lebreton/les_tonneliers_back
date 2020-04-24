const Appartement = require("../models/Appartement");

/***** Controlleur Appartement *****/

const controllerAppartement = {
  dataAppartement: (req, res) => {
    Appartement.find({}, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json(data);
    });
  },

  dataAppartementDetails: (req, res) => {
    res.send("Controller GET dataAppartementDetails");
    console.log("GET dataAppartementDetails");
  },
  dataAppartementAutres: (req, res) => {
    res.send("Controller GET dataAppartementAutres");
    console.log("GET dataAppartementAutres");
  },
};

module.exports = controllerAppartement;
