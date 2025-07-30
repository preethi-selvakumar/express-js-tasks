const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(`Request to: ${req.originalUrl}`);
    next();
});

router.get('/users', (req, res) => {
    res.send('User list');
});

module.exports = router;
