const express = require('express');
const app = express();
const PORT = 3000;

// route 1
app.get('/one', (req, res) => {
    res.send('This is route ONE');
});

// route 2
app.get('/two', (req, res) => {
    res.send('This is route TWO');
});

// route 3
app.get('/three', (req, res) => {
    res.send('This is route THREE');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
