const cron = require('node-cron');
const scheduledNotificationService = require('../services/scheduledNotificationService');

// Tarefa cron para enviar notificações diariamente às 09:00
cron.schedule('0 9 * * *', async () => {
  try {
    console.log('Enviando notificações automáticas...');
    await scheduledNotificationService.sendScheduledNotifications();
  } catch (error) {
    console.error('Erro ao enviar notificações automáticas:', error.message);
  }
});
