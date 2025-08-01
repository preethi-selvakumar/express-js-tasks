const express = require('express');
const app = express();
const PORT = 3000;

app.get('/rejected-promise', async (req, res, next) => {
    try {
        await Promise.reject(new Error('Promise rejected error!'));
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    res.status(500).json({
        status: 500,
        message: err.message || 'Something went wrong!',
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
