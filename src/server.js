
const express = require('express')
const path = require('path');//require path to get to folder
require('dotenv').config();
var morgan = require('morgan')
const configViewEngine = require('./config/viewEngine.js');
const connection = require('./config/dataBase.js')

const app = express()
app.use(morgan('combined'))
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web.js');

//config view engine
configViewEngine(app);

//declare route
app.use('/test', webRoutes);

// create the connection to database


// simple query
connection.query(
    'SELECT * FROM Users ',
    function (err, results, fields) {
        console.log('results:', results); // results contains rows returned by server
        console.log('fields:', fields); // fields contains extra meta data about results, if av  ailable
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})