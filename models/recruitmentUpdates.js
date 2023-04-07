const mongoose = require('mongoose');
const { commonFieldsForAll } = require('../utils');
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

const RecruitmentUpdate = mongoose.model('RecruitmentUpdate', recruitmentUpdateSchema);

module.exports = RecruitmentUpdate;