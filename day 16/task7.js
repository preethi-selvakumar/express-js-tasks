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

app.get('/bad-request', (req, res, next) => {
    next(new AppError('Bad Request sent by client', 400));
});

app.get('/not-found', (req, res, next) => {
    next(new AppError('Page not found', 404));
});

app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    let message;

    if (status === 400) {
        message = 'Custom: Invalid request.';
    }
    else if (status === 404) {
        message = 'Custom: The resource you are looking for was not found.';
    }
    else {
        message = 'Custom: Something went wrong.';
    }

    console.error(`Logged Error (${status}):`, err.message);

    res.status(status).json({ status, message });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
