const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/api/adduser', userController.addUser.bind(userController));

module.exports = router;
