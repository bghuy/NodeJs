const mysql = require('mysql2/promise');
//config database
require('dotenv').config();
// const connection = mysql.createConnection({
//     host: process.env.DB_USER,
//     port: process.env.DB_PORT,
//     user: process.env.DB_ROOT,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// });

const connection = mysql.createPool({
    host: process.env.DB_USER,
    port: process.env.DB_PORT,
    user: process.env.DB_ROOT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
module.exports = connection;