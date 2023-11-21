const connection = require('./../config/dataBase.js')
const getAllUsers = async () => {
    const [rows, fields] = await connection.query('SELECT * FROM Users u');
    return rows;
}
module.exports = getAllUsers