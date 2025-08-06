const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/json-data', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send('Missing name or age');
    }

    res.json(req.body);
});

app.post('/form-data', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send('Missing name or age');
    }

    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
