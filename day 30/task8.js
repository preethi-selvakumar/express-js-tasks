const express = require('express');
const app = express();

const PORT = 3000;

// Sample todos data
let todos = [
    { id: 1, task: 'Learn Express basics' },
    { id: 2, task: 'Practice routing' },
    { id: 3, task: 'Build a small API' },
    { id: 4, task: 'Learn Middleware' }
];

// GET /todos with query param filtering
app.get('/todos', (req, res) => {
    const { search } = req.query; // get ?search= from URL

    if (search) {
        const filtered = todos.filter(t =>
            t.task.toLowerCase().includes(search.toLowerCase())
        );
        return res.json(filtered);
    }

    res.json(todos); // if no query param, return all
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
