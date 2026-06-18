const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/onlineSurvey");

        console.log("database connected successfully");
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;