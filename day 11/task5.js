const express = require('express');
const app = express();

const PORT = 3000;

app.get('/search', (req, res) => {
    const term = req.query.term;
    res.send(`Search term: ${term}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
