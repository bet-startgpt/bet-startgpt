const express = require('express');
const router = express.Router();
const apiMaintenanceController = require('../controllers/apiMaintenanceController');

// Rota para verificar a saúde de uma API específica
router.get('/:apiName', apiMaintenanceController.getApiHealth);

module.exports = router;
