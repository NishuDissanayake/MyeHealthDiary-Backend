const express = require('express');
const emtController = require('./../controllers/emtController');

const router = express.Router();

router.post('/api/addemt', emtController.addEmt.bind(emtController));
router.get('/api/getemts', emtController.getEmts.bind(emtController));
router.get('/api/getemtbyemail', emtController.getEmtByEmail.bind(emtController));
router.put('/api/updateemthospital', emtController.updateEmtHospital.bind(emtController));
router.put('/api/updateemtdesignation', emtController.updateEmtDesignation.bind(emtController));
router.put('/api/updateemtphone', emtController.updateEmtPhone.bind(emtController));
router.put('/api/updateemtpassword', emtController.updateEmtPassword.bind(emtController));
router.put('/api/deleteemtaccount', emtController.deleteEmt.bind(emtController));

module.exports = router;
