// /backend/routes/predictionRoutes.js

const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');

// Rota para gerar predições com o GPT-4 Mini
router.post('/generate', predictionController.getPrediction);

module.exports = router;
