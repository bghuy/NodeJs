
const express = require('express')
const path = require('path');//require path to get to folder
require('dotenv').config();

const configViewEngine = require('./config/viewEngine.js');


const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web.js');

//config view engine
configViewEngine(app);

//declare route
app.use('/test', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})