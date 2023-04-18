const express = require('express');
const hospitalController = require('./../controllers/hospitalController');

const router = express.Router();

router.post('/api/addhospital', hospitalController.addHospital.bind(hospitalController));
router.get('/api/gethospitals', hospitalController.getHospitals.bind(hospitalController));

module.exports = router;
