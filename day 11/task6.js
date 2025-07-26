const express = require('express');
const app = express();

const PORT = 3000;

app.get('/posts/:id?', (req, res) => {
    const id = req.params.id;
    if (id) {
        res.send(`Post ID: ${id}`);
    } else {
        res.send('No Post ID provided');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
