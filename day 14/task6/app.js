const express = require('express');
const app = express();
const PORT = 3000;

const { usersRouter, productsRouter } = require('./task6');

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
