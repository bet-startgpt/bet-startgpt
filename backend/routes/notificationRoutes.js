const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Rota para buscar notificações de um usuário
router.get('/:userId', notificationController.getUserNotifications);

// Rota para enviar uma notificação manualmente
router.post('/send', notificationController.sendNotification);

module.exports = router;
