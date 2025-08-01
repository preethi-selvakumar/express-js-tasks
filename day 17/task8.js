const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'JavaScript for Beginners' },
    { id: 2, title: 'Node.js Essentials' }
];

app.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json({ message: 'Book added', book: newBook });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
