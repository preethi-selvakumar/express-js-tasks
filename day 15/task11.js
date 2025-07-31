const express = require('express');
const app = express();
const PORT = 3000;

app.get('/tags', (req, res) => {
    const tags = req.query.tags;

    if (!tags) {
        return res.send('No tags provided');
    }

    const tagsArray = Array.isArray(tags) ? tags : [tags];

    res.send(`Tags: ${tagsArray.join(', ')}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
