const express = require('express');
const router = express.Router();
const apiLimitController = require('../controllers/apiLimitController');

// Rota para configurar o limite de requisições de uma API
router.post('/setLimit', apiLimitController.setApiLimit);

// Rota para buscar o limite de uma API
router.get('/getLimit', apiLimitController.getApiLimit);

// Rota para verificar limite de uma API
router.get('/:apiName', apiLimitController.checkApiLimit);

// Rota para resetar limites de APIs (somente admin)
router.post('/reset', apiLimitController.resetApiUsage);

// Rota para buscar o limite de uma API
router.get('/limit/:apiName', apiLimitController.getApiLimit);

// Rota para ajustar o limite de uma API
router.post('/limit/set', apiLimitController.setApiLimit);

module.exports = router;
