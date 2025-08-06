const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.get('/auto-cors', cors(), (req, res) => {
    res.send('CORS enabled using cors() middleware');
});

app.get('/manual-cors', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send('CORS enabled using manual headers');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
