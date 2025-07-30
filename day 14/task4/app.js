const express = require('express');
const app = express();
const PORT = 3000;

const productRoutes = require('./task4');

app.use(productRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
