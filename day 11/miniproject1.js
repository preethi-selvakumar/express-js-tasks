const express = require('express');
const app = express();

const PORT = 3000;

app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Profile page of ${username}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
