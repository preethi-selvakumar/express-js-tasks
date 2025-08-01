class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
    }
}

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/error', (req, res, next) => {
    next(new AppError('Something went wrong in the app', 500));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        status: err.statusCode || 500,
        message: err.message || 'Internal Server Error'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
