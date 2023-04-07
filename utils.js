const mongoose = require('mongoose');

// Description: contains functions that are used in multiple files

const sendError = (res, err) => {
    // used to send error to client and console
    console.log(err);
    res.status(400).json(err);
};

const validateID = (id) => {
    // used to validate id
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
        // return the error as string to be used in catch
        return Promise.reject('Invalid ID, must be 12 bytes or a string of 24 hex characters');
    }
    return Promise.resolve();
};

const commonFieldsForAll = {
    visible: {
        type: Boolean,
        default: true,
        required: true,
    },
    sourceOfInfo: {
        type: {
            name: {
                type: String,
                default: null
            },
            department: {
                type: String,
                default: null
            },
            designation: {
                type: String,
                default: null
            },
            email: {
                type: String,
                default: null
            },
        }
    },
    order: {
        type: Number,
        default: 0
    },
    new: {
        type: Boolean,
        default: true
    },
    visibilityChangedAt: {
        type: Date,
        default: null
    },
};

// exports these functions to be used in other files
module.exports = {
    sendError,
    validateID,
    commonFieldsForAll
};