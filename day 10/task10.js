const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello from Task 10!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
