const express = require('express');
const adminController = require('./../controllers/adminController');

const router = express.Router();

router.post('/api/addadmin', adminController.addAdmin.bind(adminController));
router.put('/api/putadminorg', adminController.putAdminOrg.bind(adminController));

module.exports = router;
