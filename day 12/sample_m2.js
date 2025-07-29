const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }
    res.send(`User ${username} registered successfully.`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});