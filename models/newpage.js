const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    content: {
      type: String,
      default: "",
    },
    title:{
      type:String,
      default:"",
    },
    show: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("NewPage", Schema);

//Export----------------------------->
module.exports = Model;
