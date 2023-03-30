const express = require("express");
const latestNewsController = require("../controllers/news");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").get(latestNewsController.getNews);

Router.route("/get/all").get(latestNewsController.getAllNews);


//Export----------------------------->
module.exports = Router;
