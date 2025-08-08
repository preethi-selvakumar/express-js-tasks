const express = require('express');
const debug = require('debug')('app');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    debug('Root route accessed');
    res.send('Hello, this is Task 7!');
});

app.get('/about', (req, res) => {
    debug('About route accessed');
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
