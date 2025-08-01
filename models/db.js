require("dotenv").config();
const mysql = require("mysql2");
console.log("DB config usada:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  
});

console.log('Conectando a MySQL en:', process.env.DB_HOST, process.env.DB_PORT);

module.exports = pool.promise();
