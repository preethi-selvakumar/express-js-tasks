const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/items', (req, res) => {
    const items = req.body;

    if (!Array.isArray(items)) {
        return res.status(400).send({ error: 'Expected an array in request body' });
    }

    res.send({
        message: 'Array received successfully',
        items: items
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
