const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const YearlyRankingSchema = new mongoose.Schema(
  {
    year: { type: Number },
    ranking: { type: String },
    show: { type: Boolean, default: true },
    new: {
      type: Boolean,
    },
    newPage: {
      type: Boolean,
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
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("YearlyRanking", YearlyRankingSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the ranking authority':value,'Ranking Value':value}.
// proceed same s about us
