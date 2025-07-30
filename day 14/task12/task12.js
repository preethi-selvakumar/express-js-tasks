const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('User list from separate file');
});

module.exports = router;
