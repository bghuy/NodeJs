const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Hello')
});
router.get('/huy', (req, res) => {
    res.render('sample.ejs')
});

module.exports = router; // export default