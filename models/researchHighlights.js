const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResearchSchema = new Schema(
  {
    title: { type: String },
    desc: { type: String },
    image: { type: String },
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
    type: { type: String, required: true },
    show: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Research = mongoose.model("ResearchNews", ResearchSchema);

module.exports = Research;
