const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send({ error: 'All fields (name, email, message) are required.' });
    }

    console.log('Contact Form Received:', { name, email, message });

    res.status(200).send({
        message: `Thanks ${name}, we received your message!`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
