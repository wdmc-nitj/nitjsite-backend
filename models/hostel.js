const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    messageText: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    designation: {
      type: String,
      default: "",
    },
    hostel: {
      type: String,
      default: "",
    },
    profileLink: {
      type: String,
      default: "",
    },
    qualificationDegree: {
      type: String,
    },
    qualificationUniversity: {
      type: String,
    },
    qualificationYear: {
      type: String,
    },
    image: {
      type: String,
      default: "",
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
    contactEmail: {
      type: String,
    },
    contactTelNo: {
      type: String,
    },
    contactEPABX: {
      type: String,
    },
    contactExtn: {
      type: String,
    },
    contactFax: {
      type: String,
    },
    show: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("Hostel", Schema);

//Export----------------------------->
module.exports = Model;

// format of input in api calls

// Format of form:
// 1. it is has the above fields create input feild for all of them
// 2. for the source of info and contact create seperate fields in the form using the default object keys
// 3. keep the table below the input field to view what has been added
// 4. keep an update and delete button in the table
// 5. update pre filled vaues should come along with the update button in the new form
