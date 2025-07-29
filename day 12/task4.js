const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({
            error: 'username and password are required'
        });
    }
    res.send({
        message: 'Login successful',
        username: username
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
