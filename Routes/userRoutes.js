const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/api/adduser', userController.addUser.bind(userController));
router.put('/api/addallergy', userController.addAllergy.bind(userController));
router.put('/api/addmood', userController.addMood.bind(userController));
router.put('/api/addvaccine', userController.addVaccine.bind(userController));
router.put('/api/addmeds', userController.addCurrentMed.bind(userController));
router.put('/api/addrecord', userController.addRecord.bind(userController));
router.put('/api/addtreatment', userController.addTreatment.bind(userController));
router.get('/api/getudata', userController.getUserData.bind(userController));
router.get('/api/getucount', userController.getUserCount.bind(userController));
router.get('/api/getusers', userController.getUsers.bind(userController));
router.get('/api/getmedicalrecord', userController.getMedicalRecords.bind(userController));
router.get('/api/gettreatments', userController.getTreatments.bind(userController));

module.exports = router;
