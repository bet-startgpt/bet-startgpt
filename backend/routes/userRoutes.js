const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para registro de usuário
router.post('/register', userController.createUser);  // Mudamos de 'registerUser' para 'createUser' para refletir o controlador

// Rota para login de usuário
router.post('/login', userController.loginUser);

// Rota para atualização de perfil
router.put('/profile', userController.updateUserProfile);

// Rota para verificar o status da assinatura do usuário
router.get('/subscription-status', userController.checkSubscriptionStatus);

module.exports = router;
