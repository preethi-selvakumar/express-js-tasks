const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 

let books = [
    { id: 1, title: 'JavaScript for Beginners' },
    { id: 2, title: 'Node.js Essentials' },
    { id: 3, title: 'Learning REST APIs' }
];

app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === bookId);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1); 
        res.json({ message: 'Book deleted successfully', book: deletedBook[0] });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
