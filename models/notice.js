const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, default: "" },
    show: { type: Boolean, default: true },
    order: {
      type: Number,
      default: 0,
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
    pdfLink: {
      type: String,
    },
    newPage: {
      type: Boolean,
    },
    new: {
      type: Boolean,
      default: true,
    },

    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("Notice", Schema);

//Export----------------------------->
module.exports = Model;
