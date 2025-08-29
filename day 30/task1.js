const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    res.json({
        message: 'Data received successfully!',
        yourData: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
