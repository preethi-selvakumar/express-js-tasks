const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    res.send({
        message: 'Valid JSON received',
        data: req.body
    });
});

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send({
            error: 'Invalid JSON input'
        });
    }
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
