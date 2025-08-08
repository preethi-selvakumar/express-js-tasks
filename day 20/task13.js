const express = require('express');
const app = express();
const port = 3000;

let store = [];

app.get('/', (req, res) => {
    res.send('Hello, this is Task 13!');
});

app.get('/leak', (req, res) => {
    store.push(new Array(1000000).fill('data'));
    res.send('Leak created!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
