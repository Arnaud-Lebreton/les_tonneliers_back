/***** Controlleur Menu *****/

const controllerMenu = {
  dataMenu: (req, res) => {
    res.send("Controller GET dataMenu");
    console.log("GET dataMenu");
  },
  dataContact: (req, res) => {
    res.send("Controller POST dataContact");
    console.log("POST dataContact");
  },
};

module.exports = controllerMenu;
