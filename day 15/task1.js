const express = require('express');
const app = express();
const PORT = 3000;

app.get('/item/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Item ID: ${itemId}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
