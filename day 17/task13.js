const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'JavaScript for Beginners' },
    { id: 2, title: 'Node.js Essentials' }
];

// GET all books 
app.get('/books', (req, res) => {
    const titleQuery = req.query.title;
    let filteredBooks = books;

    if (titleQuery) {
        filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(titleQuery.toLowerCase())
        );
    }

    res.status(200).json(filteredBooks);
});

// GET single book by ID
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
});

// POST - Add new book
app.post('/books', (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const newBook = {
        id: books.length + 1,
        title
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT - Update entire book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;

    let book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    book.title = title || book.title;
    res.status(200).json({ message: 'Book updated', book });
});

// PATCH - Partially update book by ID
app.patch('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    let book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    if (updates.title) {
        book.title = updates.title;
    }

    res.status(200).json({ message: 'Book updated', book });
});

// DELETE - Remove book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    books.splice(index, 1);
    res.status(200).json({ message: 'Book deleted' });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
