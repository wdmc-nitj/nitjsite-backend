const fs = require("fs");
const path = require("path");

exports.upload = async (req, res) => {
  console.log("in upload function");
  const file = req.file;
  console.log(file);

  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    res.send(error);
  }

  res.send(path.join(__dirname, "../files", file.originalname));
};
