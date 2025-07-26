const express = require('express');
const app = express();

const PORT = 3000;

app.get('/products/:category/:id', (req, res) => {
    const category = req.params.category;
    const id = req.params.id;
    res.send(`Category: ${category}, ID: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
