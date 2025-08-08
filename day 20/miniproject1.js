const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log('--- New Request Started ---');
    console.log(`Step 1: Method = ${req.method}, URL = ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    console.log('Step 2: Inside Home Route');
    res.send('Hello, this is Mini Project 1!');
    console.log('Step 3: Response Sent');
});

app.get('/about', (req, res) => {
    console.log('Step 2: Inside About Route');
    res.send('This is the About Page');
    console.log('Step 3: Response Sent');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
