const express = require('express');
const app = express();

const PORT = 3000;

app.route('/books')
    .get((req, res) => {
        res.send('GET request to /books');
    })
    .post((req, res) => {
        res.send('POST request to /books');
    });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
