const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    link: {
      type: Object,
    },
    show: {
      type: Boolean,
      default: true,
    },
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
    newPage: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("Footer", Schema);

//Export----------------------------->
module.exports = Model;

// Proceed in sme maner as footer.
