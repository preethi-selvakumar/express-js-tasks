const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    { id: '1', name: 'Preethi' },
    { id: '2', name: 'Bob' }
];

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.send(`User: ${user.name}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
