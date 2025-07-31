const express = require('express');
const app = express();
const PORT = 3000;

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    const category = req.query.category;
    res.send(`Search Keyword: ${keyword}, Category: ${category}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
