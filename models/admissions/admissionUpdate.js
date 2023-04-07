const mongoose = require('mongoose');
const { commonFieldsForAll, regexForUpdateLogs, logUpdates } = require('../../utils');
const Schema = mongoose.Schema;

const updateSchema = new Schema(Object.assign({
    title: {
        type: String,
        required: true,
        notEmpty: true
    },
    link: {
        type: String,
        // validates as a URL if is not empty
        validate: {
            validator: function (v) {
                return v.length == 0 || /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    degree: {
        type: String,
        required: true,
        notEmpty: true,
        enum: ['BTECH', 'MTECH-CCMT', 'MTECH-SELF', 'MSC', 'MBA', 'PHD', 'FOREIGN'],
    },
}, commonFieldsForAll), { timestamps: true });

updateSchema.pre(regexForUpdateLogs, logUpdates);

const update = mongoose.model('admissionUpdate', updateSchema);

module.exports = update;