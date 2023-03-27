const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const TenderSchema = new mongoose.Schema(
  {
    lastDateOfReceiptOfBids: { type: String, required: true },
    dateOfOpeningTechnicalBids: { type: String, required: true },
    desc: { type: String, default: "" },
    fileLink: { type: String, default: "" },
    imageLink: { type: String, default: "" },
    show: { type: Boolean, default: true },
    order: {
      type: Number,
      default: 0,
    },
    new: {
      type: Boolean,
      default: true,
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
const Model = mongoose.model("Tender", TenderSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the Tender authority':value,'Tender Value':value}.
// proceed same s about us
