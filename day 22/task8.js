require('dotenv').config();

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY || 'no-api-key-provided';
const APP_NAME = process.env.APP_NAME || 'Default App';

console.log("PORT:", PORT);
console.log("API_KEY:", API_KEY);
console.log("APP_NAME:", APP_NAME);
