const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Rota para buscar dados da FootyStats API
router.get('/footystats', apiController.getFootyStatsData);

// Rota para buscar dados da Highlightly API
router.get('/highlightly', apiController.getHighlightlyData);

// Rota para buscar dados da Odds API
router.get('/odds', apiController.getOddsData);

module.exports = router;
