const axios = require('axios');

// Serviço para enviar notificações de erros críticos
exports.sendErrorNotification = async (error) => {
  try {
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: process.env.ADMIN_TELEGRAM_ID,
      text: `Erro crítico detectado: ${error.message}`
    });
  } catch (err) {
    console.error('Erro ao enviar notificação de erro:', err.message);
  }
};
