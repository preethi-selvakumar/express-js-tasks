const express = require('express');
const app = express();
const PORT = 3000;

function logMethod(req, res, next) {
    console.log('Method:', req.method);
    next();
}

function sayHello(req, res, next) {
    console.log('Hello from second step!');
    next();
}

function sendResponse(req, res) {
    console.log('Response sent to client!');
    res.send('Final response reached!');
}

app.get('/', logMethod, sayHello, sendResponse);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
