const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/json-data', (req, res) => {
    res.json(req.body);
});

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON format' });
    }
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
