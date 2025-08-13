const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 3000;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello World with Morgan format test!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
