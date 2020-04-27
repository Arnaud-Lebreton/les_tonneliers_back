const Appartement = require("../models/Appartement");
const Clients = require("../models/Clients");

/***** Controlleur Reservation *****/

/*** Récapitulatif demande de Réservation clients /GET/ ***/

const controllerReservation = {
  dataReservationApp: (req, res) => {
    Appartement.find(req, "nomApp prixNuit dateIndisp", (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json(data);
    });
  },

  /*** Enregistre la demande de Réservation clients /POST/ ***/
  dataReservationClients: (req, res) => {
    Clients.insertMany(req, (err, res) => {
      if (err) {
        console.error(err);
        res.status(500).json("Erreur d'enregistrement");
        return;
      }
    });
    res.json("Enregistrement Effectué");
  },

  /*** Récapitulatif Réservation Client /GET/ ***/
  dataConfirmationClients: (req, res) => {
    Clients.find(req, (err, res) => {
      if (err) {
        console.error(err);
        res.status(500).json("Erreur récapitulatif");
        return;
      }
    });
    res.json("Récapitulatif Effectué");
  },

  /***  */
  dataConfirmationRestantDu: (req, res) => {
    res.send("Controller PUT dataConfirmationRestantDu");
    console.log("PUT dataConfirmationRestantDu");
  },
};

module.exports = controllerReservation;
