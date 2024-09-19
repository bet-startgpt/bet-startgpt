const express = require('express');
const router = express.Router();
const activityLogController = require('../controllers/activityLogController');
const logService = require('../services/logService');

// Rota para buscar logs de atividades de um usuário específico
router.get('/:userId', activityLogController.getUserActivityLogs);

// Rota para buscar logs de atividades de todos os usuários
router.get('/activity', logService.getUserActivityLogs);

module.exports = router;
