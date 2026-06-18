const express = require("express");

const connectDB = require('./connection');

const surveyRoutes = require('./routes/surveyRoutes');
const responseRoutes = require('./routes/responseRoutes');

const app = express();

const PORT = 8001;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/surveys', surveyRoutes);
app.use('/responses', responseRoutes);

app.listen(PORT, () => {
    console.log("server started");
});