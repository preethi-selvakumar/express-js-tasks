const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
