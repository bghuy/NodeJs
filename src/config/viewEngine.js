const path = require('path');
const express = require('express')
const configViewEngine = (app) => {
    app.use(express.static(path.join(__dirname, './../public')))
    app.set('views', path.join(__dirname, './../views'));// use dirname to let nodejs understand the direction
    app.set('view engine', 'ejs');
}
module.exports = configViewEngine;