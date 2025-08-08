const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    const oldSend = res.send;
    res.send = function (data) {
        console.log(`Status: ${res.statusCode}`);
        console.log(`Body: ${data}`);
        return oldSend.call(this, data);
    };

    next();
});

app.get('/', (req, res) => {
    res.send('Hello, this is Task 11!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
