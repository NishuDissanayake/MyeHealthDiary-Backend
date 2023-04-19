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
router.put('/api/add-bandb', userController.addBandBFunc.bind(userController));
router.put('/api/add-labtest', userController.addLabTest.bind(userController));
router.put('/api/add-temperature', userController.addTemperature.bind(userController));
router.put('/api/add-blood-pressure', userController.addBPressure.bind(userController));
router.put('/api/add-comment', userController.addComments.bind(userController));
router.put('/api/add-report', userController.addReports.bind(userController));
router.get('/api/get-user-data', userController.getUserData.bind(userController));
router.get('/api/get-user-count', userController.getUserCount.bind(userController));
router.get('/api/get-users', userController.getUsers.bind(userController));
router.get('/api/get-medical-record', userController.getMedicalRecords.bind(userController));
router.get('/api/get-treatments', userController.getTreatments.bind(userController));
router.get('/api/get-bandb', userController.getBandBFunstions.bind(userController));
router.get('/api/get-labtests', userController.getLabTests.bind(userController));
router.get('/api/get-temperatures', userController.getTemperatures.bind(userController));
router.get('/api/get-blood-pressures', userController.getBPressures.bind(userController));
router.get('/api/get-comments', userController.getComments.bind(userController));
router.get('/api/get-reports', userController.getReports.bind(userController));
router.get('/api/get-active-meds', userController.getActiveMeds.bind(userController));

module.exports = router;
