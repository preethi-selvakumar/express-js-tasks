const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Preethi' },
    { id: 2, name: 'Anu' },
];

router.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
