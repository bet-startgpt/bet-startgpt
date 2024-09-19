const express = require('express');
const router = express.Router();
const userActivityLogController = require('../controllers/userActivityLogController');

// Rota para registrar atividade do usuário
router.post('/log', userActivityLogController.logActivity);

// Rota para buscar atividades de um usuário
router.get('/:userId', userActivityLogController.getUserActivityLogs);

module.exports = router;
