const express = require('express');
const adminController = require('./../controllers/adminController');

const router = express.Router();

router.post('/api/add-admin', adminController.addAdmin.bind(adminController));
router.get('/api/get-admin-by-email', adminController.getAdminByEmail.bind(adminController));
router.put('/api/update-admin-org', adminController.updateAdminOrg.bind(adminController));
router.put('/api/update-admin-designation', adminController.updateAdminPosition.bind(adminController));
router.put('/api/update-admin-phone', adminController.updateAdminPhone.bind(adminController));
router.put('/api/update-admin-password', adminController.updateAdminPassword.bind(adminController));
router.put('/api/delete-admin-acc', adminController.deactivateAdminAccount.bind(adminController));

module.exports = router;
