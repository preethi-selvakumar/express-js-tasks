const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Import router
const todosRouter = require('./todos');

// Use router for /todos path
app.use('/todos', todosRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
