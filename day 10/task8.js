const express = require('express');
const app = express();
const PORT = 3000;

app.get('/notfound', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
