const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Sample todos data
let todos = [
    { id: 1, task: 'Learn Express basics' },
    { id: 2, task: 'Practice routing' }
];

// POST /todos route
app.post('/todos', (req, res) => {
    const { task } = req.body;

    // Validation
    if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' });
    }

    // Create new todo
    const newTodo = {
        id: todos.length + 1,
        task: task
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
