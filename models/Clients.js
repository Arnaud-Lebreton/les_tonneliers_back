const mongoose = require("mongoose");

const requestClients = mongoose.model("requestClients", {
    nom : String,
    prenom : String,
    email : String,
    tel : String,
    mdp : String,
    message : String,
    reservation : Array
    
});

module.exports = requestClients;
