const express = require('express');
const app = express();

const PORT = 3000;

const todos = [
    { id: 1, task: 'Learn Express basics' },
    { id: 2, task: 'Practice routing' },
    { id: 3, task: 'Build a small API' }
];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
