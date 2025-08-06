const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/form-data', (req, res) => {
    console.log(req.body);
    res.send('Form data received');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
