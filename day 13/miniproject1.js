const express = require('express');
const app = express();
const PORT = 3000;

function requestLogger(req, res, next) {
    console.log(`Request Method: ${req.method} | Request URL: ${req.url}`);
    next();
}

app.use(requestLogger);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
