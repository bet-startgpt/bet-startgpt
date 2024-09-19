const express = require('express');
const router = express.Router();
const userSettingsController = require('../controllers/userSettingsController');

// Rota para buscar configurações do usuário
router.get('/settings', userSettingsController.getUserSettings);

// Rota para atualizar configurações do usuário
router.post('/settings', userSettingsController.updateUserSettings);

module.exports = router;
