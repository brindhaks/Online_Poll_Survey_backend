const express = require('express');

const router = express.Router();

const {
    getAllResponses,
    getResponseById,
    createResponse,
    deleteResponse
} = require('../controllers/responseController');

router.get('/', getAllResponses);

router.get('/:id', getResponseById);

router.post('/', createResponse);

router.delete('/:id', deleteResponse);

module.exports = router;