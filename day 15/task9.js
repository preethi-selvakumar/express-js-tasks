const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log('URL Params:', req.params);
    console.log('Query Params:', req.query);
    next();
});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    const show = req.query.show || 'summary';

    res.send(`Product ID: ${productId}, View: ${show}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
