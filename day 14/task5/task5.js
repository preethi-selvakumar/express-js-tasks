const express = require('express');
const router = express.Router();

router.post('/products', (req, res) => {
    const newProduct = req.body;
    res.status(201).json({
        message: 'Product received',
        product: newProduct
    });
});

module.exports = router;
