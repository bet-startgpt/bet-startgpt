const express = require('express');
const router = express.Router();
const paymentVerificationController = require('../controllers/paymentVerificationController');

// Rota para verificar o status de um pagamento
router.get('/verify/:paymentId', paymentVerificationController.verifyPayment);

module.exports = router;
