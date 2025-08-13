const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const app = express();
const PORT = 3000;

// Winston logger setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

const stream = {
    write: (message) => logger.info(message.trim())
};

app.use(morgan('combined', { stream }));

app.get('/', (req, res) => {
    res.send('Hello World with Morgan + Winston logging!');
});

app.get('/error', (req, res) => {
    logger.error('This is a custom error log');
    res.status(500).send('Error triggered');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
