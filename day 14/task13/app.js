const express = require('express');
const app = express();
const PORT = 3000;

const { userRouter, productRouter } = require('./task13');

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
