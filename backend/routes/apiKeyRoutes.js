const express = require('express');
const router = express.Router();
const apiKeyController = require('../controllers/apiKeyController');

// Rota para atualizar chave de API
router.post('/update/:apiName', apiKeyController.updateApiKey);

// Rota para alternar status da API (ativa/desativada)
router.post('/toggle/:apiName', apiKeyController.toggleApiStatus);

module.exports = router;
