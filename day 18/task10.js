const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const logParsedBody = (req, res, next) => {
    console.log('Parsed Body:', req.body);
    next();
};

app.post('/json-data', logParsedBody, (req, res) => {
    res.json({ message: 'Data received' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
