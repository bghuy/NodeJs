const connection = require('./../config/dataBase.js')
const getAllUsers = require('./../services/CRUDService.js')
const getBach = (req, res) => {
    //process data
    //call model
    let user = [];
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            user = results;
            console.log('results:', results); // results contains rows returned by server
            // console.log('fields:', fields); // fields contains extra meta data about results, if av  ailable
            res.send(JSON.stringify(user));
        }
    );
}
const getHuy = (req, res) => {
    return res.render('sample.ejs');
}
const getHomePage = async (reg, res) => {
    const rows = await getAllUsers();
    return res.render('homepage.ejs', { listUsers: rows });// html js chi hieu duoc kieu string hoac number khong ho tro kieu object
}
const postCreateUser = async (reg, res) => {
    let { email, name, city } = reg.body;
    console.log("reg.body: ", reg.body);
    // connection.query(
    // `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
    // [email, name, city],
    // );
    const [rows, fields] = await connection.query(`INSERT INTO Users (email,name,city) VALUES (?,?,?)`, [email, name, city]);
    console.log(">>rows: ", rows);
    return res.send('created user');
}
const getCreatePage = (reg, res) => {
    return res.render('createUser.ejs');
}

module.exports = { getBach, getHuy, getHomePage, postCreateUser, getCreatePage }