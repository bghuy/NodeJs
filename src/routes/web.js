const { getBach, getHuy, getHomePage, postCreateUser, getCreatePage } = require('../controllers/homeController.js')
const express = require('express');
const router = express.Router();
// router.Method('/route',handler)
router.get('/', getHomePage);
router.get('/bach', getBach);
router.get('/huy', getHuy);
router.post('/create-user', postCreateUser);
router.get('/create', getCreatePage);

module.exports = router; // export default