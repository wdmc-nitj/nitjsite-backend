const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        content: {
            type: String,
            default: "",
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
        show: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

//Model---------------------------->
const Model = mongoose.model("NewPage", Schema);

//Export----------------------------->
module.exports = Model;