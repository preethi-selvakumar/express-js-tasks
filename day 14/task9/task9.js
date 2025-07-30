const express = require('express');
const usersRouter = express.Router();

const ordersRouter = express.Router({ mergeParams: true });

ordersRouter.get('/', (req, res) => {
    const userId = req.params.id;
    res.send(`Orders for user ${userId}`);
});

usersRouter.use('/:id/orders', ordersRouter);

usersRouter.get('/', (req, res) => {
    res.send('User list');
});

module.exports = usersRouter;
