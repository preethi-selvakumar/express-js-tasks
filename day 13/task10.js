const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

function validateUser(req, res, next) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    console.log('User input validated');
    next();
}

app.post('/user', validateUser, (req, res) => {
    const { username, password } = req.body;
    res.json({
        message: 'User route hit successfully',
        username,
        password
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
