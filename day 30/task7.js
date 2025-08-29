const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Sample todos data
let todos = [
    { id: 1, task: 'Learn Express basics' },
    { id: 2, task: 'Practice routing' }
];

// Validation middleware
function validateTodo(req, res, next) {
    const { task } = req.body;
    if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' });
    }
    next(); // go to next step (route handler)
}

// POST /todos route with middleware
app.post('/todos', validateTodo, (req, res) => {
    const { task } = req.body;

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
