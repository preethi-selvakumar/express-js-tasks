const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'MyHeaderValue');
    next();
});

app.get('/', (req, res) => {
    res.send('Custom header added!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
