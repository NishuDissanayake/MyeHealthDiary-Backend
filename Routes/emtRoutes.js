const express = require('express');
const emtController = require('./../controllers/emtController');

const router = express.Router();

router.post('/api/addemt', emtController.addEmt.bind(emtController));
router.get('/api/getemts', emtController.getEmts.bind(emtController));

module.exports = router;
