const express = require('express');
const router = express.Router();
const userActivityController = require('../controllers/userActivityController');

// Rota para buscar atividades de um usuário
router.get('/:userId', userActivityController.getUserActivities);

module.exports = router;
