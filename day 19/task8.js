const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('CORS enabled on this route');
});

app.get('/no-cors', (req, res) => {
    res.send('CORS disabled on this route');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
