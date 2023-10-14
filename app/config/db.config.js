require('dotenv').config();
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "test_coding_cin",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
