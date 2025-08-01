const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'JavaScript for Beginners' },
    { id: 2, title: 'Node.js Essentials' },
    { id: 3, title: 'Learning Express' }
];

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

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
