const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Rota para buscar histórico de pagamentos
router.get('/history', paymentController.getPaymentHistory);

// Rota para verificar o status de um pagamento
router.get('/verify/:transactionId', paymentController.verifyPaymentStatus);

// Rota para criar um novo pagamento
router.post('/create', paymentController.createPayment);

// Rota para verificar o status de um pagamento
router.get('/status/:referenceId', paymentController.checkPaymentStatus);


module.exports = router;
