const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Mini Project 2!');
});

app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong in /error route!');
    next(err);
});

app.use((err, req, res, next) => {
    console.log('--- Error Caught ---');
    console.error('Error Message:', err.message);
    res.status(500).send('Custom Error: Please try again later.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
