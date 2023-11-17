
const express = require('express')
const path = require('path');//require path to get to folder
require('dotenv').config();


const app = express()
app.set('views', path.join(__dirname, 'views'));// use dirname to let nodejs understand the direction
app.set('view engine', 'ejs');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.get('/', (req, res) => {
    res.render('./sample.ejs')
})
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})