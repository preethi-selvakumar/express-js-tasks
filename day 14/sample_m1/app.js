const express = require('express');
const app = express();
const PORT = 3000;

const userRouter = require('./userRouter');

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});