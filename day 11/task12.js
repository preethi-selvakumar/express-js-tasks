const express = require('express');
const app = express();

const PORT = 3000;

app.get('/old-route', (req, res) => {
    res.redirect('/newroute');
});

app.get('/newroute', (req, res) => {
    res.send('You have been redirected to the new route.');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
