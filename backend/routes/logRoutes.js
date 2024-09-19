const express = require('express');
const logController = require('../controllers/logController');
const router = express.Router();

// Rota para buscar todos os logs do sistema (arquivo local)
router.get('/all', logController.getLogs);

// Rota para buscar logs de erros (arquivo local)
router.get('/errors', logController.getErrorLogs);

// Rota para buscar logs de atividades de um usuário (MongoDB)
router.get('/activity/:userId', logController.getUserActivityLogs);

// Rota para buscar logs de erros (MongoDB)
router.get('/db-errors', logController.getLogsFromDB);

module.exports = router;
