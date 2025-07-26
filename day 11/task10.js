const express = require('express');
const app = express();

const PORT = 3000;

app.get('/users/:id/friends', (req, res) => {
    const userId = req.params.id;

    const friends = ['Preethi', 'Anu', 'Charlie'];

    res.send(`User ID: ${userId}, Friends: ${friends.join(', ')}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
