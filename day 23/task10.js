const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

if (process.env.LOGGING_ENABLED === 'true') {
    app.use(morgan('dev'));
}

app.get('/', (req, res) => {
    res.send('Hello World with conditional Morgan logging!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
