const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    req.customMessage = 'Hello from middleware';
    next();
});

router.get('/message', (req, res) => {
    res.send(req.customMessage);
});

module.exports = router;
