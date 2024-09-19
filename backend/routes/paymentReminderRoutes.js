const express = require('express');
const router = express.Router();
const paymentReminderController = require('../controllers/paymentReminderController');

// Rota para enviar lembrete de pagamento para um usuário específico
router.post('/send/:userId', paymentReminderController.sendPaymentReminder);

module.exports = router;
