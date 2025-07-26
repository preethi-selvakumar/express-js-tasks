const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
