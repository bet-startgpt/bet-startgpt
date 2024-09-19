const axios = require('axios');

// Função para enviar notificações via Telegram
exports.sendTelegramNotification = async (chatId, message) => {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: chatId,
      text: message
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar notificação via Telegram:', error.message);
  }
};
