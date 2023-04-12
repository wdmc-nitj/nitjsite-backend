const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String, default: "" },
    order: {
      type: Number,
      default: 0,
    },
    type: {
      type: String, required: true,
      enum: [
        "Conference",
        "Seminar",
        "FDP",
        "STC",
        "Workshop",
        "GuestLecture",
        "others",
      ],
    },
    img: { type: String, default: "" },
    new: {
      type: Boolean,
      default: true,
    },
    newPage: {
      type: Boolean,
      default: false,
    },
    pdfLink: {
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
    startDate:{type:Date, required: true},
    desc:{type:String},
    
    endDate:{type:Date},
    show: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("UpcomingEvent", Schema);

//Export----------------------------->
module.exports = Model;
