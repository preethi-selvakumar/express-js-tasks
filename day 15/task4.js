const express = require('express');
const app = express();
const PORT = 3000;

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;

    if (!productId) {
        return res.status(400).send('Bad Request: Product ID is required');
    }

    res.send(`Product ID: ${productId}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
