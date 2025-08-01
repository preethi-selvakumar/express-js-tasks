const express = require('express');
const app = express();
const PORT = 3000;

app.get('/error', (req, res, next) => {
    const err = new Error('This is an error passed to next()');
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
