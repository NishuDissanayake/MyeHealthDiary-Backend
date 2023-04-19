const express = require('express');
const adminController = require('./../controllers/adminController');

const router = express.Router();

router.post('/api/addadmin', adminController.addAdmin.bind(adminController));
router.put('/api/updateadminorg', adminController.updateAdminOrg.bind(adminController));
router.put('/api/updateadmindesignation', adminController.updateAdminPosition.bind(adminController));
router.put('/api/updateadminphone', adminController.updateAdminPhone.bind(adminController));
router.put('/api/updateadminpassword', adminController.updateAdminPassword.bind(adminController));
router.put('/api/deleteadminacc', adminController.deactivateAdminAccount.bind(adminController));
module.exports = router;
