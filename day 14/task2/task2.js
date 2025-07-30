const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Preethi' },
    { id: 2, name: 'Anu' },
];

router.get('/users', (req, res) => {
    res.json(users);
});

module.exports = router;
