const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is Task 10!');
});

app.get('/error', (req, res) => {
    throw new Error('Something went wrong in /error route!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
