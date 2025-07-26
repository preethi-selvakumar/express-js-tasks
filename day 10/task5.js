const express = require('express');
const app = express();

app.use(express.json());

app.post('/data', (req, res) => {
    res.json(req.body);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
