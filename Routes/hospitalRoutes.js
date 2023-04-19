const express = require('express');
const hospitalController = require('./../controllers/hospitalController');

const router = express.Router();

router.post('/api/add-hospital', hospitalController.addHospital.bind(hospitalController));
router.get('/api/get-hospitals', hospitalController.getHospitals.bind(hospitalController));

module.exports = router;
