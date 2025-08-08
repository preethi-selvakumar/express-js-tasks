const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const message = 'Hello, stepping through!';
    console.log('Inside GET / route'); 
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
