const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const allowedOrigins = [undefined, 'http://localhost:3000', 'http://localhost:5500'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token === 'Bearer token123') {
        next();
    } 
    else {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

app.get('/auth', authMiddleware, (req, res) => {
    res.json({ message: 'Authenticated successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
