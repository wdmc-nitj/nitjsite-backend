const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

process.on("unhandledRejection", (err) => {
  console.log("unhandleed rejection occured");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});


dotenv.config({ path: "./.env" });

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection to database eshtablished");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//server listening------------------------------------------------->
const port = process.env.PORT || 8000;





process.on("uncoughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});
