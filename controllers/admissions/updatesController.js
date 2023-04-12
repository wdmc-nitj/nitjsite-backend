const admissionUpdate = require('../../models/admissions/admissionUpdate');
const { sendError, validateID } = require('../../utils');

const createUpdate = (req, res) => {
    const update = new admissionUpdate(req.body);

    update.save()
        .then((createdUpdate) => res.status(201).json(createdUpdate))
        .catch((err) => sendError(res, err));
};

const getUpdates = (req, res) => {
    let filter = {};

    if (req.query.degree !== 'all') {
        filter.degree = req.query.degree;
    }

    if (req.query.visible === 'visible') {
        filter.visible = true;
    } else if (req.query.visible === 'hidden') {
        filter.visible = false;
    }

    admissionUpdate.find(filter)
        .sort({ updatedAt: -1 })
        .then((updates) => res.json(updates))
        .catch((err) => sendError(res, err));
};

const getUpdateById = (req, res) => {
    const id = req.query.id;
    validateID(id).then(() => {
        admissionUpdate.findById(id)
            .then((update) => res.json(update))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
};

const editUpdate = (req, res) => {
    const id = req.query.id;
    validateID(id).then(() => {
        admissionUpdate.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
            .then((result) => res.json(result))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
};

const editMetaData = (req, res) => {
    const id = req.query.id;
    validateID(id).then(() => {
        admissionUpdate.findById(id)
            .then((update) => {
                if (req.query.action === 'toggleVisibility') {
                    update.visible = !update.visible;
                    update.visibilityChangedAt = Date.now();
                } else if (req.query.action === 'toggleNew') {
                    update.new = !update.new;
                } else {
                    return res.status(400).json({
                        message: 'Invalid action'
                    });
                }
                update.save()
                    .then((result) => res.json(result))
                    .catch((err) => sendError(res, err));
            })
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
};

const deleteUpdate = (req, res) => {
    const id = req.query.id;
    validateID(id).then(() => {
        admissionUpdate.findByIdAndDelete(id)
            .then((deletedUpdate) => res.json(deletedUpdate))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
};

module.exports = {
    createUpdate,
    getUpdates,
    getUpdateById,
    editUpdate,
    toggleUpdateVisibility: editMetaData,
    deleteUpdate
};