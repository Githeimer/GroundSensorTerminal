const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aavishkar_gst"
}).promise();

module.exports = pool;