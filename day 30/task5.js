const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Sample todos data
let todos = [
    { id: 1, task: 'Learn Express basics' },
    { id: 2, task: 'Practice routing' },
    { id: 3, task: 'Build a small API' }
];

// PUT /todos/:id route
app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const { task } = req.body;

    // Validation
    if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' });
    }

    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    // Update todo
    todo.task = task;

    res.json(todo);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
