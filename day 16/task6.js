const express = require('express');
const app = express();
const PORT = 3000;

app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong');
    next(err);
});

app.use((err, req, res, next) => {
    console.error('Logged Error:', err.message);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
