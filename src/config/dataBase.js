const mysql = require('mysql2');
//config database
require('dotenv').config();
const connection = mysql.createConnection({
    host: process.env.DB_USER,
    port: process.env.DB_PORT,
    user: process.env.DB_ROOT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
module.exports = connection;