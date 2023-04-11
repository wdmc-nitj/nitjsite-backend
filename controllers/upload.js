const fs = require("fs");
const path = require("path");

exports.upload = async (req, res) => {

    const file = req.body;
    console.log(file);

    if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        res.send(error);
    }

    fs.writeFile(
        path.join(__dirname, "../images", file.originalname),
        file.buffer,
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
    
    res.json(path.join(__dirname, "../images", file.originalname));
  };
  

