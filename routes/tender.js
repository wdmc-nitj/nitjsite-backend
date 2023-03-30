const express = require("express");
const tenderController = require("../controllers/tender");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").get(tenderController.showTender);

Router.route("/get/all").get(tenderController.showAllTender);



//Export----------------------------->
module.exports = Router;
