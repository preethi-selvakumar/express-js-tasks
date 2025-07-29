const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/user', (req, res) => {
    const { user } = req.body;

    res.send({
        message: 'Nested JSON received',
        user: user
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
