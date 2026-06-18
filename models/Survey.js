const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    questions: [
        {
            questionText: String,
            questionType: {type: String,enum: ['mcq', 'rating', 'text']},
            options: [String]
        }
    ],

    deadline: Date
}, {
    timestamps: true
});

module.exports = mongoose.model("Survey", surveySchema);