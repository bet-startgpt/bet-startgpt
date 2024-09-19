const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para autenticar usuário pelo Telegram
router.post('/auth', authController.authenticateUser);

module.exports = router;
