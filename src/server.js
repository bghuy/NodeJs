
const express = require('express')
const path = require('path');//require path to get to folder
const app = express()
const port = 8081

app.set('views', path.join(__dirname, 'views'));// use dirname to let nodejs understand the direction

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('./sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})