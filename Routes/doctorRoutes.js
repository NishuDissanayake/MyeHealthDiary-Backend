const express = require('express');
const doctorController = require('./../controllers/doctorController');

const router = express.Router();

router.post('/api/add-doctor', doctorController.addDoctor.bind(doctorController));
router.get('/api/get-doctors', doctorController.getDoctors.bind(doctorController));
router.get('/api/get-doctors-by-spec', doctorController.getDoctorsbySpec.bind(doctorController));
router.get('/api/get-doctor-by-email', doctorController.getDoctorByEmail.bind(doctorController));
router.put('/api/update-doctor-hospital', doctorController.updateDoctorHospital.bind(doctorController));
router.put('/api/update-doctor-qualifications', doctorController.updateDoctorQualifications.bind(doctorController));
router.put('/api/update-doctor-phone', doctorController.updateDoctorContact.bind(doctorController));
router.put('/api/update-doctor-password', doctorController.updateDoctorPassword.bind(doctorController));
router.put('/api/delete-doctor', doctorController.deleteDoctor.bind(doctorController));

module.exports = router;
