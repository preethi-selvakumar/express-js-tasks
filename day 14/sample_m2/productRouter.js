const express = require('express');
const router = express.Router();

let products = [
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Laptop' },
];

// List all products
router.get('/', (req, res) => {
    res.json(products);
});

// Add new product (dummy implementation)
router.post('/', (req, res) => {
    // For now, just return success
    res.json({ message: 'Product added successfully (not really)' });
});

module.exports = router;