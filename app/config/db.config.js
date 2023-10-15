require('dotenv').config();
module.exports = {
  HOST: process.env.DB_HOST||"localhost",
  USER: process.env.DB_USERNAME||"root",
  PASSWORD: process.env.DB_PASSWORD||"",
  DB: process.env.DB_DATABASE||"test_coding_cin",
  dialect: process.env.DB_CONNECTION||"mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
