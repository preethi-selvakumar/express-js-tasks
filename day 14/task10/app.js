const express = require('express');
const app = express();
const PORT = 3000;

const messageRoutes = require('./task10');

app.use(messageRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
