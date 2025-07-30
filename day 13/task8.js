const express = require('express');
const app = express();
const PORT = 3000;

function measureTime(req, res, next) {
    const start = Date.now();

    res.on('finish', () => {
        const end = Date.now();
        const timeTaken = end - start;
        console.log(`Request to ${req.method} ${req.url} took ${timeTaken}ms`);
    });

    next();
}

app.get('/', measureTime, (req, res) => {
    res.send('Request timing middleware example!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
