const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Sample todos data
let todos = [
    { id: 1, task: 'Learn Express basics' },
    { id: 2, task: 'Practice routing' }
];

// GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// GET single todo by id
app.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(todo);
});

// POST create new todo
app.post('/todos', (req, res) => {
    const { task } = req.body;

    if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' });
    }

    const newTodo = {
        id: todos.length + 1,
        task: task
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

// PUT update todo by id
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
    res.json(todo);
});

// DELETE todo by id
app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === todoId);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const deletedTodo = todos.splice(index, 1)[0];
    res.json({ message: 'Todo deleted successfully', deletedTodo });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
