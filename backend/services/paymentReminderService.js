const axios = require('axios');
const User = require('../models/User');

// Serviço para enviar lembretes de pagamento pendente
exports.sendPaymentReminder = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('Usuário não encontrado');

    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: user.telegramId,
      text: 'Lembrete: Sua assinatura está prestes a expirar. Renove para continuar recebendo os sinais.'
    });
  } catch (error) {
    throw new Error('Erro ao enviar lembrete de pagamento: ' + error.message);
  }
};
