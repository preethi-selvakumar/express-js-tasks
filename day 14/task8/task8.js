const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('Product list');
});

router.use((req, res) => {
    res.status(404).send('Route not found inside router');
});

module.exports = router;
