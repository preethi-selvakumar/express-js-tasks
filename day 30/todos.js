const express = require('express');
const router = express.Router();

// todos data
let todos = [
    { id: 1, task: 'Learn Express basics' },
    { id: 2, task: 'Practice routing' }
];

// GET all todos
router.get('/', (req, res) => {
    res.json(todos);
});

// GET todo by ID
router.get('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(todo);
});

// POST create todo
router.post('/', (req, res) => {
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

// PUT update todo
router.put('/:id', (req, res) => {
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

// DELETE todo
router.delete('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === todoId);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const deletedTodo = todos.splice(index, 1)[0];
    res.json({ message: 'Todo deleted successfully', deletedTodo });
});

module.exports = router;
