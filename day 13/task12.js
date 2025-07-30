const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

function logPostBody(req, res, next) {
    if (req.method === 'POST') {
        console.log('POST Request Body:', req.body);
    }
    next();
}

app.use(logPostBody);

app.post('/submit', (req, res) => {
    res.send('Data received successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
