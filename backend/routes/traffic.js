const express = require('express');
const router = express.Router();
const trafficController = require('../controllers/trafficController');

router.get('/', trafficController.getTrafficData);
router.post('/', trafficController.addTrafficData);
router.post('/predict', trafficController.predictCongestion);

module.exports = router;
