const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    messageText: { type: String, required: true },
    designation: { type: String, default: "" },
    show: { type: Boolean, default: true },
    image: { type: String, default: "" },
    order: {
      type: Number,
      default: 0,
    },
    new: {
      type: Boolean,
    },
    newPage: {
      type: Boolean,
    },
    sourceOfInfoName: {
      type: String,
    },
    sourceOfInfoEmail: {
      type: String,
    },
    sourceOfInfoDesignation: {
      type: String,
    },
    sourceOfInfoDepartment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("testimonial", Schema);

//Export----------------------------->
module.exports = Model;
