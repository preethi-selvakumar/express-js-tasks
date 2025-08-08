const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is Task 5!');
});

app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    next(err);
});

app.use((err, req, res, next) => {
    console.error('Error message:', err.message);
    res.status(500).send('Internal Server Error: ' + err.message);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
