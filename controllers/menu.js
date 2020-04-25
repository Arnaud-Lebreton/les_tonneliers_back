const Clients = require("../models/Clients");

/***** Controlleur Menu *****/

const controllerMenu = {
  dataContact: (req, res) => {
    let form = {
      nom: "LEBRETON",
      prenom: "Arnaud",
      email: "arnolebreton@gmail.com",
      tel: "0760406549",
      message: "Ceci est un test",
    };
    const contact = new Clients({
      nom: form.nom,
      prenom: form.prenom,
      email: form.email,
      tel: form.tel,
      message: form.message,
    });
    contact.save((err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur, veuillez réessayer");
        return;
      }
      res.status(200).send("Votre message a été transmis à nos équipes");
    });
  },
};

module.exports = controllerMenu;
