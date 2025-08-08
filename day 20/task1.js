const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    res.send('Hello from Task 1!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
