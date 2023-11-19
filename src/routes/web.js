const { getBach, getHuy } = require('../controllers/homeController.js')
const express = require('express');
const router = express.Router();
// router.Method('/route',handler)
router.get('/bach', getBach);
router.get('/huy', getHuy);

module.exports = router; // export default