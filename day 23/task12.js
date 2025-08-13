const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

morgan.token('json', (req, res) => {
    return JSON.stringify({
        method: req.method,
        url: req.url,
        status: res.statusCode,
        time: new Date().toISOString()
    });
});

app.use(morgan(':json'));

app.get('/', (req, res) => {
    res.send('Hello JSON Logging!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
