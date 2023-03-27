const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const TimelineSchema = new mongoose.Schema(
  {
    year: { type: Number },
    desc: { type: String },
    show: { type: Boolean, default: true },
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
const Model = mongoose.model("Timeline", TimelineSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the Timeline authority':value,'Timeline Value':value}.
// proceed same s about us
