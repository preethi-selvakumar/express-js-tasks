const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
    res.json({ received: req.body });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
