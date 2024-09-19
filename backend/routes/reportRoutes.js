const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Rota para buscar relatórios
router.get('/', reportController.getReports);

// Rota para gerar relatório de usuários
router.get('/users', reportController.generateUserReport);

// Rota para gerar relatório de tips
router.get('/tips', reportController.generateTipReport);

// Rota para gerar relatório de pagamentos
router.get('/payments', reportController.generatePaymentReport);

module.exports = router;