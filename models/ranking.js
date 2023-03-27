const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const RankingSchema = new mongoose.Schema(
  {
    rankingName: { type: String },
    rankingValue: { type: String },
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
    new: {
      type: Boolean,
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
const Model = mongoose.model("Ranking", RankingSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the ranking authority':value,'Ranking Value':value}.
// proceed same s about us
