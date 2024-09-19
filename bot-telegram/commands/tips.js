const Tip = require('../../backend/models/Tip');
const notificationService = require('../services/notificationService');

// Comando para enviar sinais (tips) ao usuário
exports.sendTips = async (chatId) => {
  try {
    const tips = await Tip.find().limit(5);  // Envia até 5 sinais
    const message = tips.map(tip => `Jogo: ${tip.match} - Previsão: ${tip.prediction} - Odds: ${tip.odds}`).join('\n');
    
    await notificationService.sendTelegramNotification(chatId, message);
  } catch (error) {
    console.error('Erro ao enviar sinais no Telegram:', error.message);
  }
};
