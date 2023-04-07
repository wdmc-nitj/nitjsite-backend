const mongoose = require('mongoose');
const { commonFieldsForAll, logUpdates, regexForUpdateLogs } = require('../../utils');
const Schema = mongoose.Schema;

const helplineSchema = new Schema(Object.assign({
    degree: {
        type: String,
        required: true,
        notEmpty: true,
        enum: ['BTECH', 'MTECH-CCMT', 'MTECH-SELF', 'MSC', 'MBA', 'PHD', 'FOREIGN']
    },
    number: {
        type: String,
        required: true,
        notEmpty: true,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    name: {
        type: String,
        required: true,
        notEmpty: true
    },
    languages: {
        type: [String],
        required: true,
        // validates as an array of strings
        validate: {
            validator: function (v) {
                return Array.isArray(v) && v.every((item) => typeof item === 'string' && item.length > 0);
            },
            message: props => `${props.value} is not a valid array of strings!`
        }
    },
    startTime: {
        // 12 hour format
        type: String,
        required: true,
        notEmpty: true,
        validate: {
            validator: function (v) {
                return /\d{2}:\d{2} [AP]M/.test(v);
            },
            message: props => `${props.value} is not a valid time!`
        }
    },
    endTime: {
        // 12 hour format
        type: String,
        required: true,
        notEmpty: true,
        validate: {
            validator: function (v) {
                return /\d{2}:\d{2} [AP]M/.test(v);
            },
            message: props => `${props.value} is not a valid time!`
        }
    },
}, commonFieldsForAll), { timestamps: true });

helplineSchema.pre(regexForUpdateLogs, logUpdates);

const helpline = mongoose.model('admissionHelpline', helplineSchema);

module.exports = helpline;