const express = require('express');
const emtController = require('./../controllers/emtController');

const router = express.Router();

router.post('/api/add-emt', emtController.addEmt.bind(emtController));
router.get('/api/get-emts', emtController.getEmts.bind(emtController));
router.get('/api/get-emt-by-email', emtController.getEmtByEmail.bind(emtController));
router.put('/api/update-emt-hospital', emtController.updateEmtHospital.bind(emtController));
router.put('/api/update-emt-designation', emtController.updateEmtDesignation.bind(emtController));
router.put('/api/update-emt-phone', emtController.updateEmtPhone.bind(emtController));
router.put('/api/update-emt-password', emtController.updateEmtPassword.bind(emtController));
router.put('/api/delete-emt-account', emtController.deleteEmt.bind(emtController));

module.exports = router;
