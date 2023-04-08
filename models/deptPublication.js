const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const PublicationSchema = new mongoose.Schema(
  {
      
        "Title": {
          type: String
        },
        department: {
          type: String,
          enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
      },
        "Authors": {
          type: String
        },
        "Source": {
          type: String
        },
        "Status": {
          type: String
        },
        "Year": {
          type: String
        },
    show: { type: Boolean, default: true },
    order: {
      type: Number,
    },
    new: {
      type: Boolean,
    },
    sourceOfInfo: {
      type: Object,
      default: {
        name: null,
        email: null,
        designation: null,
        department: null,
      }
    },
},{
  timestamps: true,
}
);

//Model---------------------------->
const Model = mongoose.model("deptPublication", PublicationSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the Publication authority':value,'Publication Value':value}.
// proceed same s about us
