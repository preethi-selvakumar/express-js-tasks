const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.use((req, res, next) => {
    res.on('finish', () => {
        console.log('CORS Headers:');
        console.log('Access-Control-Allow-Origin:', res.getHeader('Access-Control-Allow-Origin'));
        console.log('Access-Control-Allow-Credentials:', res.getHeader('Access-Control-Allow-Credentials'));
        console.log('Access-Control-Allow-Headers:', res.getHeader('Access-Control-Allow-Headers'));
        console.log('Access-Control-Allow-Methods:', res.getHeader('Access-Control-Allow-Methods'));
    });
    next();
});

app.get('/', (req, res) => {
    res.send('CORS logging middleware active');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
