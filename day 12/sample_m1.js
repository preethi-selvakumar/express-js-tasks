const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/message', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    res.json({ status: 'success', messageReceived: message });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});