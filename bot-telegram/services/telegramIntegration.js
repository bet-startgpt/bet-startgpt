const axios = require('axios');

// Função para enviar mensagens via Telegram
exports.sendMessage = async (chatId, message) => {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: chatId,
      text: message
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao enviar mensagem pelo Telegram: ${error.message}`);
  }
};

// Função para processar comandos recebidos
exports.processCommand = async (command, chatId) => {
  // Exemplo simples de resposta a um comando "/start"
  if (command === '/start') {
    return this.sendMessage(chatId, 'Bem-vindo ao bot de Sinais Desportivos!');
  }
};
