const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const smtp = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: 'false',
    auth: {
        user: process.env.USER,
        pass: process.env.TOKEN
    }
};

let transport = nodemailer.createTransport(smtp);

module.exports = transport;
