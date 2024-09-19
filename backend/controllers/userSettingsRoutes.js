const express = require('express');
const router = express.Router();
const userSettingsController = require('../controllers/userSettingsController');

// Rota para atualizar configurações do usuário
router.put('/update/:userId', userSettingsController.updateUserSettings);

// Rota para buscar configurações do usuário
router.get('/:userId', userSettingsController.getUserSettings);

module.exports = router;
