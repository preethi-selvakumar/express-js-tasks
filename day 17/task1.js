const express = require('express');
const app = express();
const PORT = 3000;

const books = [
    { id: 1, title: 'JavaScript for Beginners' },
    { id: 2, title: 'Node.js Essentials' },
    { id: 3, title: 'Understanding Express.js' }
];

app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
