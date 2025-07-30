const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

// List all users
router.get('/', (req, res) => {
    res.json(users);
});

// Get user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

module.exports = router;