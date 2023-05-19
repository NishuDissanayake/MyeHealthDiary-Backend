const express = require('express');
const authController = require('./../controllers/loginController');

const router = express.Router();

// Login route
router.post('/api/login', authController.userLogin);
router.post('/api/admin-login', authController.adminLogin);
router.post('/api/emt-login', authController.emtLogin);
router.post('/api/doctor-login', authController.doctorLogin);

module.exports = router;
