const express = require('express');
const app = express();
const PORT = 3000;

const blockedIPs = ['123.456.7.89', '::1'];

app.use((req, res, next) => {
    const clientIP = req.ip;

    if (blockedIPs.includes(clientIP)) {
        res.status(403).send('Access denied: Your IP is blocked.');
    } else {
        next();
    }
});

app.get('/', (req, res) => {
    res.send('You are allowed to access this route.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
