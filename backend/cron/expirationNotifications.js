const cron = require('node-cron');
const User = require('../models/User');
const notificationService = require('../services/notificationService');

// Tarefa agendada para enviar notificações de expiração de assinatura
cron.schedule('0 9 * * *', async () => {
  console.log('Executando tarefa agendada: Notificações de expiração');

  try {
    const usersWithExpiringSubscriptions = await User.find({ subscriptionExpiresIn: { $lt: 3 } });

    usersWithExpiringSubscriptions.forEach(async (user) => {
      console.log(`Enviando notificação para o usuário: ${user._id}`);
      await notificationService.sendTelegramNotification(user.telegramId, 'Sua assinatura está prestes a expirar!');
    });
  } catch (error) {
    console.error('Erro ao enviar notificações de expiração:', error.message);
  }
});
