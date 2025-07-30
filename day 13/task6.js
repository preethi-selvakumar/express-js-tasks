const express = require('express');
const app = express();
const PORT = 3000;

const validApiKeys = ['123456', 'abcdef'];

app.use((req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (validApiKeys.includes(apiKey)) {
        next();
    } else {
        res.status(401).send('Unauthorized: Invalid or missing API key');
    }
});

app.get('/secure-data', (req, res) => {
    res.send('You have access to secure data!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
