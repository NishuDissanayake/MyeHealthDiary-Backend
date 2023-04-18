const express = require('express');
const doctorController = require('./../controllers/doctorController');

const router = express.Router();

router.post('/api/adddoctor', doctorController.addDoctor.bind(doctorController));
router.get('/api/getdoctors', doctorController.getDoctors.bind(doctorController));
router.get('/api/getdoctorsbyspec', doctorController.getDoctorsbySpec.bind(doctorController));

module.exports = router;
