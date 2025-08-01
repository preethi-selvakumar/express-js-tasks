const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

let orders = [
    { id: 101, userId: 1, item: 'Book' },
    { id: 102, userId: 1, item: 'Pen' },
    { id: 103, userId: 2, item: 'Notebook' }
];

app.get('/users/:id/orders', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const userOrders = orders.filter(order => order.userId === userId);

    res.status(200).json({
        user: user.name,
        orders: userOrders
    });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
