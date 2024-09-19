const axios = require('axios');

// Serviço para enviar mensagens pelo bot do Telegram
exports.sendMessage = async (chatId, message) => {
  try {
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: chatId,
      text: message
    });
  } catch (error) {
    throw new Error('Erro ao enviar mensagem no Telegram: ' + error.message);
  }
};
