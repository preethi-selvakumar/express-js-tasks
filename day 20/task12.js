const express = require('express');
const app = express();
const PORT = 3000;

const buf = new Buffer('Hello Warning!');

app.get('/', (req, res) => {
    res.send('Hello, this is Task 12!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
