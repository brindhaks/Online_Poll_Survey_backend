const Survey = require('../models/Survey');

async function getAllSurveys(req, res) {
    try {
        const surveys = await Survey.find();

        res.json(surveys);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getSurveyById(req, res) {
    try {
        const survey = await Survey.findById(req.params.id);

        if (!survey) {
            return res.status(404).json({
                message: "Survey not found"
            });
        }

        res.json(survey);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createSurvey(req, res) {
    try {
        const survey = await Survey.create(req.body);

        res.status(201).json(survey);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateSurvey(req, res) {
    try {
        const survey = await Survey.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(survey);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function deleteSurvey(req, res) {
    try {
        await Survey.findByIdAndDelete(req.params.id);

        res.json({
            message: "Survey deleted successfully"
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllSurveys,
    getSurveyById,
    createSurvey,
    updateSurvey,
    deleteSurvey
};