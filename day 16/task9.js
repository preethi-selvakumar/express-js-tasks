const express = require('express');
const app = express();
const PORT = 3000;

app.get('/async-error', async (req, res, next) => {
    try {
        await Promise.reject(new Error('Async error occurred!'));
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    res.status(500).json({
        status: 500,
        message: err.message || 'Internal Server Error'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
