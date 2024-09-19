const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Rota para buscar configurações de APIs
router.get('/api-configs', adminController.getApiConfigs);

// Rota para alterar status de API
router.post('/api-configs/:apiId', adminController.updateApiStatus);

// Rota para monitoramento de usuários
router.get('/users', adminController.getUsers);

module.exports = router;
