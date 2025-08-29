const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// todos data
let todos = [
    { id: 1, task: 'Learn Express basics', createdAt: new Date(), updatedAt: new Date() },
    { id: 2, task: 'Practice routing', createdAt: new Date(), updatedAt: new Date() }
];

// GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST create new todo with timestamps
app.post('/todos', (req, res) => {
    const { task } = req.body;

    if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' });
    }

    const newTodo = {
        id: todos.length + 1,
        task: task,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

// PUT update todo and change updatedAt
app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const { task } = req.body;

    if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' });
    }

    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    todo.task = task;
    todo.updatedAt = new Date();

    res.json(todo);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
