const express = require('express');
const router = express.Router();
const paymentNotificationController = require('../controllers/paymentNotificationController');

// Rota para enviar notificação de pagamento manualmente
router.post('/send', paymentNotificationController.sendNotification);

// Rota para buscar notificações de pagamento de um usuário
router.get('/:userId', paymentNotificationController.getUserNotifications);

module.exports = router;
