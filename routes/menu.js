const express = require("express");
const routerMenu = express.Router();
const controllerMenu = require("../controllers/menu");

routerMenu.get("/lestonneliers", controllerMenu.dataMenu);

routerMenu.post("/contact", controllerMenu.dataContact);

module.exports = routerMenu;
