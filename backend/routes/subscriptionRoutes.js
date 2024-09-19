const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Rota para criar uma nova assinatura
router.post('/create', subscriptionController.createSubscription);

// Rota para verificar o status da assinatura de um usuário
router.get('/:userId/status', subscriptionController.checkSubscriptionStatus);

// Rota para cancelar uma assinatura
router.post('/:userId/cancel', subscriptionController.cancelSubscription);

module.exports = router;
