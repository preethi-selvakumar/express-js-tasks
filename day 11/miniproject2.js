const express = require('express');
const app = express();

const PORT = 3000;

app.get('/search', (req, res) => {
    const query = req.query.q || 'none';
    const page = req.query.page || 1;
    res.json({ searchTerm: query, pageNumber: page });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
