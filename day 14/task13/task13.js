const express = require('express');

const userRouter = express.Router();
userRouter.get('/', (req, res) => {
    res.send('User list');
});

const productRouter = express.Router();
productRouter.get('/', (req, res) => {
    res.send('Product list');
});

module.exports = {
    userRouter,
    productRouter
};
