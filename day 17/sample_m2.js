const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Laptop' },
];

// GET all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// POST new product
app.post('/products', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Product name is required' });

    const newProduct = {
        id: products.length + 1,
        name: name
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update product by ID
app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });

    product.name = req.body.name || product.name;
    res.json(product);
});

// DELETE product by ID
app.delete('/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Product not found' });

    products.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
