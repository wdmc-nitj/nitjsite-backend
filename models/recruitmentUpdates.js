const mongoose = require('mongoose');
const { commonFieldsForAll, regexForUpdateLogs, logUpdates } = require('../utils');
const Schema = mongoose.Schema;

const recruitmentUpdateSchema = new Schema(Object.assign({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['faculty', 'nonFaculty', 'faculty-contract', 'nonFaculty-contract']
    },
}, commonFieldsForAll), { timestamps: true });

recruitmentUpdateSchema.pre(regexForUpdateLogs, logUpdates);

const RecruitmentUpdate = mongoose.model('RecruitmentUpdate', recruitmentUpdateSchema);

module.exports = RecruitmentUpdate;