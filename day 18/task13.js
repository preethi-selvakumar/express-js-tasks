const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    res.send(`Parsed Body: ${JSON.stringify(req.body)}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
