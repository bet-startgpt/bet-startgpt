const express = require('express');
const router = express.Router();
const paymentManagementController = require('../controllers/paymentManagementController');

// Rota para criar um novo pagamento
router.post('/', paymentManagementController.createPayment);

// Rota para verificar o status de um pagamento
router.get('/:paymentId', paymentManagementController.getPaymentStatus);

module.exports = router;
