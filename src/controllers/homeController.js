
const getBach = (req, res) => {
    //process data
    //call model
    res.send("Hello bach");
}
const getHuy = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getBach, getHuy }