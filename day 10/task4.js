const express = require('express');
const app = express();

app.use(express.json());

app.post('/echo', (req, res) => {
    res.json(req.body);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
