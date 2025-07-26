const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greet', (req, res) => {
    res.json({ message: 'Hello! Welcome to the Greeting API.' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
