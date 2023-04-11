const express = require('express');
const UploadController = require('../controllers/upload');

const Router = express.Router();

Router.route('/').post(UploadController.upload);

module.exports = Router;