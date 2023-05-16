const express = require('express');
const authController = require('./../controllers/loginController');

const router = express.Router();

// Login route
router.post('/api/login', authController.userLogin);
router.post('/admin-login', authController.adminLogin);
router.post('/emt-login', authController.emtLogin);
router.post('/doctor-login', authController.doctorLogin);

module.exports = router;
