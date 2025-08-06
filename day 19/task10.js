const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const allowedOrigins = ['http://example.com', 'http://localhost:4000'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('CORS origin check');
});

app.use((err, req, res, next) => {
    console.error('CORS Error:', err.message);
    res.status(403).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
