const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.url} - ${duration}ms`);
    });

    next();
});

app.get('/', (req, res) => {
    res.send('Hello World with response time logging!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
