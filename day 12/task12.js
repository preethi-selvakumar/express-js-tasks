const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    if (req.method === 'POST') {
        console.log('POST Request Body:', req.body);
    }
    next();
});

app.post('/log-body', (req, res) => {
    res.send({
        message: 'POST data received and logged!'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
