const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/test-api', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).send({ error: 'Message is required' });
    }

    res.send({
        status: 'Success',
        received: message
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
