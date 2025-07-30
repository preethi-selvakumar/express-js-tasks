const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
