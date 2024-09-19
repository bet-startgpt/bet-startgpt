const axios = require('axios');
const User = require('../models/User');

// Envia notificações de expiração de plano
exports.sendExpirationNotifications = async () => {
  try {
    const expiringUsers = await User.find({ subscriptionExpiresIn: { $lt: 3 } });

    expiringUsers.forEach(async (user) => {
      await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: user.telegramId,
        text: `Sua assinatura do plano ${user.plan} está prestes a expirar em ${user.subscriptionExpiresIn} dias.`
      });
    });
  } catch (error) {
    console.error('Erro ao enviar notificações de expiração de plano:', error.message);
  }
};
