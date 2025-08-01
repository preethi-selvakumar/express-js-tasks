const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'JavaScript for Beginners' },
    { id: 2, title: 'Node.js Essentials' },
    { id: 3, title: 'Learning REST APIs' }
];

app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;

    let book = books.find(b => b.id === bookId);

    if (book) {
        book.title = updatedBook.title;
        res.json({ message: 'Book updated successfully', book: book });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
