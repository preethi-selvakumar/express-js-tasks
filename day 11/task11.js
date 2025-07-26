const express = require('express');
const app = express();

const PORT = 3000;

// Text response route
app.get('/text', (req, res) => {
    res.type('text');
    res.send('This is plain text response.');
});

// JSON response route
app.get('/json', (req, res) => {
    res.json({ message: 'This is JSON response.' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
