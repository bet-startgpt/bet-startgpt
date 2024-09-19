const express = require('express');
const router = express.Router();
const scheduledNotificationController = require('../controllers/scheduledNotificationController');

// Rota para agendar uma nova notificação
router.post('/schedule', scheduledNotificationController.scheduleNotification);

module.exports = router;
