const express = require('express');
const app = express();
const PORT = 3000;

app.get('/info', (req, res) => {
    res.json({
        name: 'Express App',
        version: '1.0'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
