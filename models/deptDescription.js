const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const deptDescription = new mongoose.Schema(
    {

        description:{
            type:String
        },
        img:{
            type:String
        },
        department: {
            type: String,
            enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
        },
        show: { type: Boolean, default: true },
        order: {
            type: Number,
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
    }, {
    timestamps: true,
}
);

//Model---------------------------->
const Model = mongoose.model("deptDescription", deptDescription);

//Export----------------------------->
module.exports = Model;

