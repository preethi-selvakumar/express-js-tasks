const express = require('express');
const app = express();
const PORT = 3000;

app.get('/user/:userId/order/:orderId', (req, res) => {
    const userId = req.params.userId;
    const orderId = req.params.orderId;
    res.send(`User ID: ${userId}, Order ID: ${orderId}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
