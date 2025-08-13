require('dotenv').config();

const DEBUG = process.env.DEBUG === 'true';

console.log("App started.");

if (DEBUG) {
    console.log("Debugging is enabled.");
    console.log("Extra debug info: ", { envVars: process.env });
}
