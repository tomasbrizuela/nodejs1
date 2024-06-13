const funct = require('./calculos');

const os = require('node:os');

console.log("Memoria total: " + funct(os.totalmem) + " GB");
console.log("Memoria libre: " + funct(os.freemem) + " GB");
