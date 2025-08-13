const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 3000;

morgan.token('headers', (req) => {
    return JSON.stringify(req.headers);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :headers'));

app.get('/', (req, res) => {
    res.send('Hello World with custom Morgan token!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
