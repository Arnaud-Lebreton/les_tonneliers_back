/***** Controlleur Connexion *****/

const controllerConnexion = {
  dataConnexion: (req, res) => {
    res.send("Controller GET dataConnexion");
    console.log("GET dataConnexion");
  },
  dataConnexionForm: (req, res) => {
    res.send("Controller POST dataConnexionForm");
    console.log("POST dataConnexionForm");
  },
  dataInscription: (req, res) => {
    res.send("Controller POST dataInscription");
    console.log("POST dataInscription");
  },
  dataMdp: (req, res) => {
    res.send("Controller POST dataMdp");
    console.log("POST dataMdp");
  },
};

module.exports = controllerConnexion;
