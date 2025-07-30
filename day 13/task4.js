const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    const receivedData = req.body;
    res.send(`Received data: ${JSON.stringify(receivedData)}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
