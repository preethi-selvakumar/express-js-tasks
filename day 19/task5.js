const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const corsOptions = {
    origin: 'http://localhost:4000',
    credentials: true
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('CORS with credentials enabled');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
