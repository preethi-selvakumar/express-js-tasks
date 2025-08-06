const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('CORS test successful');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
