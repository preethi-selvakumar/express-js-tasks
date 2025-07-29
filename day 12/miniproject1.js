const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/message', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    res.status(200).json({
        status: 'Success',
        receivedMessage: message
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
