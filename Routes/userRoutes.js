const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/api/adduser', userController.addUser.bind(userController));
router.put('/api/addallergy', userController.addAllergy.bind(userController));
router.put('/api/addmood', userController.addMood.bind(userController));
router.put('/api/addvaccine', userController.addVaccine.bind(userController));

module.exports = router;
