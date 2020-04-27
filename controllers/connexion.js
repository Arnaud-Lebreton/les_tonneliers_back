/*
 * Controlleur Connexion
 */

//Import
const Clients = require("../models/Clients");

const controllerConnexion = {
  // Connexion : Recherche si client enregistré (avec filtre mail)
  dataConnexion: (req, res) => {
    let mail = "edd.mercier@gmail.com"; //req.query.email; //récupérer la variable depuis le front
    let mdp = "mdpEddyModif"; //req.query.mdp;
    Clients.find({ email: mail, mdp: mdp }, "_id email", (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json(data);
      //res.send("Connexion ok");
    });
  },

  // Connexion : Enregistre le formulaire message
  dataConnexionForm: (req, res) => {
    let donneeRecu = {
      nom: "MERCIER",
      prenom: "Eddy",
      email: "eddy.mercier@gmail.com",
      tel: "06 50 11 15 85",
      mdp: "mdpEddy",
      message: "message d'Eddy",
    };

    Clients.insertMany(donneeRecu, (err, res) => {
      if (err) {
        res.status(500).json({});
        return;
      }
    });
    res.json("Le massage a été enregisté");
  },

  // Connexion : Enregistre le formulaire d'inscription
  dataInscription: (req, res) => {
    let donneeRecu = {
      nom: "SOTIRIO",
      prenom: "Carole",
      email: "carole.sotirio@gmail.com",
      tel: "06 50 11 15 85",
      mdp: "mdpCarole",
    };
    Clients.insertMany(donneeRecu, (err, res) => {
      if (err) {
        res.status(500).json({});
        return;
      }
    });
    res.json("Votre inscription a été enregisté");
  },

  // Connexion : Modification du mot de passe
  dataMdp: (req, res) => {
    let donneeRecu = {
      email: "eddy.mercier@gmail.com",
      mdp: "mdpEddyModif",
    };
    Clients.updateOne(
      { email: donneeRecu.email },
      { mdp: donneeRecu.mdp },
      (err) => {
        if (err) {
          res.status(500).json({});
          return;
        }
      }
    );
    res.json("Votre mot de passe a été enregisté");
  },
};

module.exports = controllerConnexion;
