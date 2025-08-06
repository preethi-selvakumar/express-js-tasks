const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const corsOptions = {
    origin: 'http://example.com'
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('CORS restricted to http://example.com');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
