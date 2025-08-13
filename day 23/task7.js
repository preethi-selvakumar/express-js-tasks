const express = require('express');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');

const app = express();
const PORT = 3000;

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, 'log')
});

app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
    res.send('Hello World with daily rotated logs!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
