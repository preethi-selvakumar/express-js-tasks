const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World with Morgan dev format!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
