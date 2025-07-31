const express = require('express');
const app = express();
const PORT = 3000;

app.get('/calculate', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Bad Request: num1 and num2 must be valid numbers');
    }

    const sum = num1 + num2;
    res.send(`Sum: ${sum}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
