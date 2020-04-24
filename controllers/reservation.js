/***** Controlleur Reservation *****/

const controllerReservation = {
  dataReservation: (req, res) => {
    res.send("Controller GET dataReservation");
    console.log("GET dataReservation");
  },
  dataConfirmation: (req, res) => {
    res.send("Controller POST dataConfirmation");
    console.log("POST dataConfirmation");
  },
};

module.exports = controllerReservation;
