require('dotenv').config();

const express = require('express');
const app = express();

const API_KEY = process.env.API_KEY;

app.get('/secret', (req, res) => {
    const userKey = req.query.key;

    if (userKey === API_KEY) {
        res.send('Access granted! Here is the secret data.');
    } else {
        res.status(403).send('Access denied! Invalid API key.');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
