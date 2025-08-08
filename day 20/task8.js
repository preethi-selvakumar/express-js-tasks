const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is Task 8!');
});

app.get('/data', async (req, res, next) => {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Failed to fetch data!')), 1000);
        });

        res.send('Data fetched successfully!');
    } catch (err) {
        next(err); 
    }
});

app.use((err, req, res, next) => {
    console.error('Error caught:', err.message);
    res.status(500).send('Internal Server Error: ' + err.message);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
