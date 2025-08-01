const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong in /error route');
    next(err);
});

app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        res.status(500).send('Something went wrong. Please try again later.');
    } else {
        res.status(500).send(`Error: ${err.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
