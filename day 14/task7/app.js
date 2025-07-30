const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./task7');

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
