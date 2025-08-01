const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'JavaScript for Beginners' },
    { id: 2, title: 'Node.js Essentials' }
];

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

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
