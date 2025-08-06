const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/json-data', (req, res) => {
    console.log(req.body);
    res.send('JSON data received');
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
