const express = require('express');
const doctorController = require('./../controllers/doctorController');

const router = express.Router();

router.post('/api/adddoctor', doctorController.addDoctor.bind(doctorController));

module.exports = router;
