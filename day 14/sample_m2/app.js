const express = require('express');
const app = express();
const PORT = 3000;

const productRouter = require('./productRouter');

app.use(express.json());

app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});