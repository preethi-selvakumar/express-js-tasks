const express = require('express');
const app = express();
const PORT = 3000;

app.get('/error', (req, res, next) => {
    const error = new Error('Something went wrong!');
    next(error);
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
