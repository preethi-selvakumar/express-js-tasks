const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY || 'no-api-key';

app.get('/', (req, res) => {
    res.send(`PORT: ${PORT}, API_KEY: ${API_KEY}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
