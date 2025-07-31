const express = require('express');
const app = express();
const PORT = 3000;

app.get(['/page', '/page/:number'], (req, res) => {
    const pageNumber = req.params.number || '1';
    res.send(`Page Number: ${pageNumber}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
