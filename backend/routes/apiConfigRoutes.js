const express = require('express');
const router = express.Router();
const apiConfigController = require('../controllers/apiConfigController');

// Rota para buscar configurações de APIs
router.get('/api-config', apiConfigController.getApiConfigs);

// Rota para alternar ativação/desativação de API
router.post('/api-config/:apiName/toggle', apiConfigController.toggleApiStatus);

// Rota para atualizar chave de API
router.post('/update-key', apiConfigController.updateApiKey);

// Rota para ativar/desativar API
router.post('/toggle-status', apiConfigController.toggleApiStatus);

module.exports = router;
