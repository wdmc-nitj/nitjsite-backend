const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const PlacementStatSchema = new mongoose.Schema(
  {
    placementStatName: { type: String },
    placementStatValue: { type: String },
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
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("PlacementStat", PlacementStatSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the PlacementStat authority':value,'PlacementStat Value':value}.
// proceed same s about us
