require('dotenv').config();
const express = require('express');
const app = express();

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
