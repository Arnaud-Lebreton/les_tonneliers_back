/*
 * Controlleur Connexion
 */

//Import
const Clients = require("../models/Clients");

const controllerConnexion = {
  // Connexion : Recherche si client enregistré (avec filtre mail, mdp)
  dataConnexion: (req, res) => {
    let recherche = { email: "eddy.mercier@gmail.com", mdp: "mdpEddy" };
    Clients.find({}, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      let message;
      for (let i = 0; i < data.length; i++) {
        if (recherche.email == data[i].email) {
          if (recherche.mdp == data[i].mdp) {
            message = "Validation de la connexion";
          } else {
            message = "Le mot de passe erroné";
          }
        } else {
          message = "Vous n'avez pas de compte, veuillez vous inscrire";
        }
      }
      res.json(message);
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
