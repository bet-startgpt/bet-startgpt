const axios = require('axios');
const User = require('../models/User');

// Serviço para notificar usuários sobre expiração do plano
exports.notifyExpiringPlans = async () => {
  try {
    const expiringUsers = await User.find({ subscriptionExpiresIn: { $lt: 3 } });
    expiringUsers.forEach(async user => {
      await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: user.telegramId,
        text: `Sua assinatura do plano ${user.plan} está prestes a expirar em ${user.subscriptionExpiresIn} dias.`
      });
    });
  } catch (error) {
    console.error('Erro ao enviar notificações de expiração:', error.message);
  }
};
