const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// In-memory array to store users
let users = [];
let nextId = 1; // to auto-increment IDs

// CREATE - Add new user
app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    // Basic validation
    if (!name || !email || !age) {
        return res.status(400).json({ error: 'Name, email, and age are required.' });
    }
    const newUser = { id: nextId++, name, email, age };
    users.push(newUser);
    res.status(201).json(newUser);
});

// READ - Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// READ - Get user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
});

// UPDATE - Update user by ID
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found.' });
    }

    const { name, email, age } = req.body;

    // Validation - at least one field should be provided
    if (!name && !email && !age) {
        return res.status(400).json({
            error: 'At least one field (name, email, or age) required to update.'
        });
    }

    // Update fields if they exist in request body
    if (name) users[userIndex].name = name;
    if (email) users[userIndex].email = email;
    if (age) users[userIndex].age = age;

    res.json(users[userIndex]);
});

// DELETE - Remove user by ID
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found.' });
    }

    const deletedUser = users.splice(userIndex, 1);
    res.json({ message: 'User deleted.', user: deletedUser[0] });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
