const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
    console.log('Form data received:', req.body);
    res.send(`Received: ${JSON.stringify(req.body)}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
