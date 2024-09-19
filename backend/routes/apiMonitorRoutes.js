const express = require('express');
const router = express.Router();
const apiMonitorController = require('../controllers/apiMonitorController');

// Rota para buscar o uso atual de uma API
router.get('/usage', apiMonitorController.getApiUsage);

module.exports = router;
