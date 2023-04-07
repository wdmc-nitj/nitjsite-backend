const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { commonFieldsForAll } = require('../../utils');

const linkSchema = new Schema(Object.assign({
    title: {
        type: String,
        required: true,
        notEmpty: true
    },
    link: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
}, commonFieldsForAll), { timestamps: true });


const link = mongoose.model('admissionLink', linkSchema);


module.exports = link;