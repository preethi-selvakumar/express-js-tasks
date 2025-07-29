const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    res.send({
        message: 'JSON received successfully',
        yourData: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
