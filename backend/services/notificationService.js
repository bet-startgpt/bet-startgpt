const axios = require('axios');
const User = require('../models/User');
const Notification = require('../models/Notification');

// Serviço para enviar notificações automáticas
exports.sendNotification = async (userId, message) => {
  try {
    // Busca o usuário pelo ID
    const user = await User.findById(userId);
    if (!user) throw new Error('Usuário não encontrado');

    // Envia a notificação via Telegram
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: user.telegramId,
      text: message
    });

    // Armazena a notificação no banco de dados
    const notification = new Notification({
      userId,
      message,
      sentAt: new Date()
    });
    await notification.save();

    return notification;
  } catch (error) {
    throw new Error(`Erro ao enviar notificação: ${error.message}`);
  }
};

// Serviço para buscar notificações de um usuário
exports.getUserNotifications = async (userId) => {
  try {
    // Retorna todas as notificações de um usuário específico
    return await Notification.find({ userId }).sort({ sentAt: -1 }); // Ordena por data de envio, mais recente primeiro
  } catch (error) {
    throw new Error(`Erro ao buscar notificações: ${error.message}`);
  }
};

// Serviço para enviar notificação a um usuário
exports.sendNotification = async (userId, message) => {
  const newNotification = new Notification({ userId, message, sentAt: new Date() });
  await newNotification.save();
  return newNotification;
};

// Serviço para buscar notificações de um usuário
exports.getUserNotifications = async (userId) => {
  return await Notification.find({ userId });
};