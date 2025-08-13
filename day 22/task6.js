require('dotenv').config();

const PORT = process.env.PORT || 5000; 
const API_KEY = process.env.API_KEY || 'no-api-key-provided';

console.log("PORT:", PORT);
console.log("API_KEY:", API_KEY);
