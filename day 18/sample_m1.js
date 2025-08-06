const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/submit-json', (req, res) => {
    res.json({
        message: 'JSON data received',
        data: req.body,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});