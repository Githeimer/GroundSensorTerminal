const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const corsOption = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'DELETE',
        'PATCH'
    ],

    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ]
};

app.use(express.json());
app.use(cors(corsOption));

// routes 
const sensorDataRoute = require('./routes/sensorData.route');

app.use('/api/sensorData', sensorDataRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal Server Error.";

    return res.status(statusCode).json({
        success: false,
        errorCode: statusCode,
        message: errorMessage
    });
});

app.get("/", (req, res) => {
    res.status(200).json({ message: "test" });
})