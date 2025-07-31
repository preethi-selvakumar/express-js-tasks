const express = require('express');
const app = express();
const PORT = 3000;

app.get('/user/:id/profile', (req, res) => {
    const userId = req.params.id;
    const showDetails = req.query.details || 'basic';

    res.send(`User ID: ${userId}, Profile Details: ${showDetails}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
