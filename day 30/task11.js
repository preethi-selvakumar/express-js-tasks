const express = require('express');
const app = express();

const PORT = 3000;

// Logging middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // go to next middleware or route handler
}

app.use(logger);

app.use(express.json());

// route
app.get('/todos', (req, res) => {
    res.json([
        { id: 1, task: 'Learn Express basics' },
        { id: 2, task: 'Practice routing' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
