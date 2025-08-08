const express = require('express');
const app = express();
const PORT = 3000;

app.get('/divide', (req, res) => {
    const a = 10;
    const b = 0;
    if (b === 0) {
        return res.status(400).send('Error: Division by zero!');
    }
    res.send(`Result: ${a / b}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
