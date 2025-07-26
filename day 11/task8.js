const express = require('express');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Home Route');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
