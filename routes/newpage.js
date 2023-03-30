const express = require("express");
const newPageController = require("../controllers/newpage");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").get(newPageController.getNewPage);

Router.route("/:id").get(newPageController.getNewPagebyId);

// Router.route("/get/all").get(latestNewsController.getAllNews);

Router.route("/:id")
    .put(newPageController.updatenewPage)
    .post(newPageController.deletenewPage);

//Export----------------------------->
module.exports = Router;
