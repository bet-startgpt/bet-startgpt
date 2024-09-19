const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

// Rota para buscar perfil do usuário
router.get('/:userId', userProfileController.getUserProfile);

// Rota para criar ou atualizar perfil do usuário
router.post('/:userId', userProfileController.saveUserProfile);

module.exports = router;
