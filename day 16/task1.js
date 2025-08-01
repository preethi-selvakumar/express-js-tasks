const express = require('express');
const app = express();
const PORT = 3000;

app.get('/error', (req, res) => {
    throw new Error('This is a synchronous error');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
