const Response = require('../models/Response');

async function getAllResponses(req, res) {
    try {
        const responses = await Response.find().populate('surveyId');
        res.json(responses);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getResponseById(req, res) {
    try {
        const response = await Response.findById(req.params.id)
            .populate('surveyId');

        res.json(response);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createResponse(req, res) {
    try {
        const response = await Response.create(req.body);

        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function deleteResponse(req, res) {
    try {
        await Response.findByIdAndDelete(req.params.id);

        res.json({
            message: "Response deleted successfully"
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllResponses,
    getResponseById,
    createResponse,
    deleteResponse
};