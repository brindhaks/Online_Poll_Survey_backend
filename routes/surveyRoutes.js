const express = require('express');

const router = express.Router();

const {
    getAllSurveys,
    getSurveyById,
    createSurvey,
    updateSurvey,
    deleteSurvey
} = require('../controllers/surveyController');

router.get('/', getAllSurveys);

router.get('/:id', getSurveyById);

router.post('/', createSurvey);

router.put('/:id', updateSurvey);

router.delete('/:id', deleteSurvey);

module.exports = router;