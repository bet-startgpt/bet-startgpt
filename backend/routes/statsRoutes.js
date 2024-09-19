const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

// Rota para buscar estatísticas de times
router.get('/', statsController.getTeamStats);

module.exports = router;
