require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/config', (req, res) => {
    res.json({
        port: process.env.PORT,
        apiKey: process.env.API_KEY,
        appName: process.env.APP_NAME
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
