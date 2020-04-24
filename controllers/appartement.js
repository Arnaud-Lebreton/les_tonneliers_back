/***** Controlleur Appartement *****/

const controllerAppartement = {
  dataAppartement: (req, res) => {
    res.send("Controller GET dataAppartement");
    console.log("GET dataAppartement");
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
