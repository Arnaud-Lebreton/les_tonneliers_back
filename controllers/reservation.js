const Appartement = require("../models/Appartement");
const Clients = require("../models/Clients");

/***** Controlleur Reservation *****/

/*** Récapitulatif demande de Réservation clients /GET/ ***/

const controllerReservation = {
  dataReservationApp: (req, res) => {
    Appartement.find({ nomApp: "Le Corton Charlemagne" }, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      let dataTable = [];
      for (let i = 0; i < data.length; i++) {
        let liste = {
          nomApp: data[i].nomApp,
          prixNuit: data[i].prixNuit,
          dateIndisp: data[i].dateIndisp,
        };
        dataTable.push(liste);
      }
      res.json(dataTable);
    });
  },

  /*** Enregistre la demande de Réservation clients /POST/ ***/
  dataReservationClients: (req, res) => {
    let donneesResa = {
      nomApp: "Le Corton Charlemagne",
      arrivee: "01/05/2020",
      depart: "05/05/2020",
      nbVoyageurs: 2,
      totalBrut: 250,
      fraisMenage: 20,
      fraisService: 30,
      taxeSejour: 40,
      totalResa: 340,
    };
    Clients.insertMany(donneesResa, (err, res) => {
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
    let donneesResa = {
      nomApp: "Le Corton Charlemagne",
      arrivee: "01/05/2020",
      depart: "05/05/2020",
      nbVoyageurs: 2,
      totalBrut: 250,
      fraisMenage: 20,
      fraisService: 30,
      taxeSejour: 40,
      totalResa: 340,
    };
    Clients.find(donneesResa, (err, res) => {
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
