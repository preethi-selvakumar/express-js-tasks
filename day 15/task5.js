const express = require('express');
const app = express();
const PORT = 3000;

app.get('/filter', (req, res) => {
    const sortBy = req.query.sortBy || 'name';
    const order = req.query.order || 'asc';

    res.send(`Sort By: ${sortBy}, Order: ${order}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
