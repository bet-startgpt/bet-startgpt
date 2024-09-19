const cron = require('node-cron');
const subscriptionStatusService = require('../services/subscriptionStatusService');
const notificationService = require('../services/notificationService');

// Tarefa cron para verificar assinaturas diariamente às 08:00
cron.schedule('0 8 * * *', async () => {
  try {
    console.log('Verificando assinaturas expiradas...');
    const users = await User.find();
    
    for (const user of users) {
      const isActive = await subscriptionStatusService.checkIfActive(user._id);
      if (!isActive) {
        await notificationService.sendNotification(user._id, 'Sua assinatura expirou. Por favor, renove.');
      }
    }
  } catch (error) {
    console.error('Erro ao verificar assinaturas:', error.message);
  }
});
