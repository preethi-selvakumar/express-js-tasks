const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    console.log('Received data:', req.body);

    res.send({
        message: 'Login data received',
        username: req.body.username,
        password: req.body.password
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
