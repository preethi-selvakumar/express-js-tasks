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

app.get('/custom-error', (req, res, next) => {
    next(new AppError('Resource not found', 404));
});

app.get('/programming-error', (req, res, next) => {
    undefinedFunction();
});

app.use((err, req, res, next) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message
        });
    }
    else {
        console.error('Programming Error:', err);
        res.status(500).json({
            status: 500,
            message: 'Something went wrong!'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
