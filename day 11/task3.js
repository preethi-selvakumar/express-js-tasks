const express = require('express');
const app = express();

const PORT = 3000;

app.get('/users/:id', (req, res) => {
    res.send(`User ID is ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
