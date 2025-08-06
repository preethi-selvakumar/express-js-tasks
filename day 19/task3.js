const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const corsOptions = {
    methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('CORS allows only GET and POST methods');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
