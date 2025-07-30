const express = require('express');
const router = express.Router();

router.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong');
    next(err);
});

router.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Internal Server Error: ' + err.message);
});

module.exports = router;
