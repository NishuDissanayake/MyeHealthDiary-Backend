const express = require('express');
const adminController = require('./../controllers/adminController');

const router = express.Router();

router.post('/api/addadmin', adminController.addAdmin.bind(adminController));
// router.post('/api/addGame', adminController.addGame.bind(gameController));

module.exports = router;
