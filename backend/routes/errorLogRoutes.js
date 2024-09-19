const express = require('express');
const router = express.Router();
const errorLogController = require('../controllers/errorLogController');

// Rota para buscar todos os logs de erro
router.get('/all', errorLogController.getAllErrorLogs);

module.exports = router;
