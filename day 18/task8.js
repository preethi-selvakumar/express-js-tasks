const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json({ limit: '1kb' }));
app.use(express.urlencoded({ extended: true }));

app.post('/json-data', (req, res) => {
    res.json(req.body);
});

app.use((err, req, res, next) => {
    if (err.type === 'entity.too.large') {
        return res.status(413).send('Payload too large');
    }

    res.status(500).send('Something went wrong');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
