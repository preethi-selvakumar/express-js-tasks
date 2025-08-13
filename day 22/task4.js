require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello This is Task 4!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
