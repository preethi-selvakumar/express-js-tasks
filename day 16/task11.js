const express = require('express');
const winston = require('winston');
const app = express();
const PORT = 3000;

const logger = winston.createLogger({
    level: 'error',
    transports: [
        new winston.transports.File({ filename: 'error.log' })
    ],
    format: winston.format.simple()
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    next(err);
});

app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});