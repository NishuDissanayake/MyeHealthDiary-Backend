const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/api/add-user', userController.addUser.bind(userController));
router.put('/api/add-allergy', userController.addAllergy.bind(userController));
router.put('/api/add-mood', userController.addMood.bind(userController));
router.put('/api/add-vaccine', userController.addVaccine.bind(userController));
router.put('/api/add-meds', userController.addCurrentMed.bind(userController));
router.put('/api/add-record', userController.addRecord.bind(userController));
router.put('/api/add-treatment', userController.addTreatment.bind(userController));
router.get('/api/get-user-data', userController.getUserData.bind(userController));
router.get('/api/get-user-count', userController.getUserCount.bind(userController));
router.get('/api/get-users', userController.getUsers.bind(userController));
router.get('/api/get-medical-record', userController.getMedicalRecords.bind(userController));
router.get('/api/get-treatments', userController.getTreatments.bind(userController));

module.exports = router;
