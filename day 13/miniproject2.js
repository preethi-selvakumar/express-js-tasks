const express = require('express');
const app = express();
const PORT = 3000;

const API_KEY = '12345';

function authMiddleware(req, res, next) {
    const apiKey = req.header('x-api-key');
    if (apiKey !== API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

app.use(authMiddleware);

app.get('/secure-data', (req, res) => {
    res.json({ data: 'This is protected data.' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});