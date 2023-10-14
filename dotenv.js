require('dotenv').config();

// mencetak variabel env
console.log("HOST: " + process.env.DB_HOST);
console.log("USER: " + process.env.DB_USERNAME);
console.log("PASS: " + process.env.DB_PASSWORD);
console.log("NAME: " + process.env.DB_DATABASE);