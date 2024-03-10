const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
}).promise();

module.exports = pool;