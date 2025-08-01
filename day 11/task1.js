const express = require('express');
const app = express();

const PORT = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
