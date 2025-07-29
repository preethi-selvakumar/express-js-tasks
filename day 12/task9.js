const express = require('express');
const app = express();
const PORT = 3000;

const savedData = [];

app.use(express.json());

app.post('/save', (req, res) => {
    const data = req.body;
    savedData.push(data);

    res.status(201).send({
        message: 'Data saved successfully',
        saved: data
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
