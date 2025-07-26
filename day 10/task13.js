const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    res.json({
        message: 'User registered successfully!',
        user: { name, email }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
