const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/create', (req, res) => {
    const data = req.body;

    res.status(201).send({
        message: 'Data created successfully',
        data: data
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
