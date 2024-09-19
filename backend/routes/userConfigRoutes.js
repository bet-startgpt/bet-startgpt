const express = require('express');
const router = express.Router();
const userConfigController = require('../controllers/userConfigController');

// Rota para atualizar as configurações do usuário
router.post('/update', userConfigController.updateUserConfig);

// Rota para buscar as configurações atuais do usuário
router.get('/:userId', userConfigController.getUserConfig);

module.exports = router;
