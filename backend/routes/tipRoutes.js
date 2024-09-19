const express = require('express');
const router = express.Router();
const tipController = require('../controllers/tipController');

// Rota para criar um novo sinal (tip)
router.post('/create', tipController.createTip);

// Rota para listar todos os sinais (tips)
router.get('/all', tipController.getAllTips);

// Rota para enviar um sinal específico para um usuário
router.post('/send', tipController.sendTipToUser);

module.exports = router;
