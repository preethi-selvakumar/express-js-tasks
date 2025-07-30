const express = require('express');

const usersRouter = express.Router();
const productsRouter = express.Router();

usersRouter.get('/', (req, res) => {
    res.send('User route');
});

productsRouter.get('/', (req, res) => {
    res.send('Product route');
});

module.exports = {
    usersRouter,
    productsRouter
};
