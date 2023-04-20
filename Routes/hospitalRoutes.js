const express = require('express');
const hospitalController = require('./../controllers/hospitalController');

const router = express.Router();

router.post('/api/add-hospital', hospitalController.addHospital.bind(hospitalController));
router.get('/api/get-hospitals', hospitalController.getHospitals.bind(hospitalController));
router.put('/api/update-hospital-address', hospitalController.updateHospitalAddress.bind(hospitalController));
router.put('/api/update-hospital-phone', hospitalController.updateHospitalContact.bind(hospitalController));
router.put('/api/delete-hospital', hospitalController.deleteHospital.bind(hospitalController));

module.exports = router;
