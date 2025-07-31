const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test/:type', (req, res) => {
    const type = req.params.type;
    const queryParams = req.query;

    res.json({
        message: `You tested the '${type}' route.`,
        queryParams: queryParams
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
