const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    name: { type: String },
    link: { type: String },
    order: {
      type: Number,
    },
    type: {
      type: String,
      enum: ["photoGallery", "history", "homePageImageSlider"],
      default: "photoGallery",
    },
    new: {
      type: Boolean,
    },
    newPage: {
      type: String,
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
const Model = mongoose.model("PhotoGallery", Schema);

//Export----------------------------->
module.exports = Model;
