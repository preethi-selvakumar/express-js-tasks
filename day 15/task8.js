const express = require('express');
const app = express();
const PORT = 3000;

const items = [
    { id: 1, category: 'books', name: 'Node.js Guide' },
    { id: 2, category: 'electronics', name: 'Keyboard' },
    { id: 3, category: 'books', name: 'JavaScript Basics' },
    { id: 4, category: 'clothing', name: 'T-Shirt' }
];

app.get('/items', (req, res) => {
    const category = req.query.category;

    if (category) {
        const filteredItems = items.filter(item => item.category === category);
        return res.send(filteredItems);
    }

    res.send(items);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
