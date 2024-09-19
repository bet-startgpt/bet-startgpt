const ScheduledNotification = require('../models/ScheduledNotification');
const notificationService = require('./notificationService');

// Serviço para enviar notificações programadas
exports.sendScheduledNotifications = async () => {
  try {
    const notifications = await ScheduledNotification.find({ sent: false });

    for (const notification of notifications) {
      await notificationService.sendNotification(notification.userId, notification.message);
      notification.sent = true;
      await notification.save();
    }
  } catch (error) {
    console.error('Erro ao enviar notificações programadas:', error.message);
    throw new Error('Erro ao enviar notificações programadas.');
  }
};
