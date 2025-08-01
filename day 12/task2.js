const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/echo', (req, res) => {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});