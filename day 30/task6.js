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

// DELETE /todos/:id route
app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);

    const index = todos.findIndex(t => t.id === todoId);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    // Remove todo from array
    const deletedTodo = todos.splice(index, 1)[0];

    res.json({ message: 'Todo deleted successfully', deletedTodo });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
