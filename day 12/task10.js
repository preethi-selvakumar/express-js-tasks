const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/custom-message', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).send({ error: 'Name field is required' });
    }

    res.send({
        message: `Hello ${name}, your data was received successfully!`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
