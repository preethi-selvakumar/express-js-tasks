const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'JavaScript for Beginners' },
    { id: 2, title: 'Node.js Essentials' }
];

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.post('/books', (req, res) => {
    const newBook = req.body;

    if (!newBook.title || newBook.title.trim() === '') {
        return res.status(400).json({ message: 'Title is required' });
    }

    books.push(newBook);
    res.status(201).json({ message: 'Book created', book: newBook });
});

app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    let book = books.find(b => b.id === id);

    if (book) {
        book.title = updatedBook.title;
        res.status(200).json({ message: 'Book updated', book: book });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.status(200).json({ message: 'Book deleted', book: deletedBook[0] });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
