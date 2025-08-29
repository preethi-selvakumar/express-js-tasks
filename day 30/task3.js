const express = require('express');
const app = express();

const PORT = 3000;

const todos = [
    { id: 1, task: 'Learn Express basics' },
    { id: 2, task: 'Practice routing' },
    { id: 3, task: 'Build a small API' }
];

app.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
