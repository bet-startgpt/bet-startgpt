const PaymentNotification = require('../models/PaymentNotification');
const axios = require('axios');

// Enviar notificação de pagamento para o usuário
exports.sendPaymentNotification = async (userId, message) => {
  try {
    const notification = new PaymentNotification({ userId, message });
    await notification.save();

    // Exemplo de envio de notificação via Telegram
    const user = await User.findById(userId);
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: user.telegramID,
      text: message
    });

    return notification;
  } catch (error) {
    throw new Error(`Erro ao enviar notificação de pagamento: ${error.message}`);
  }
};
