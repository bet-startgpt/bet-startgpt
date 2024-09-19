const notificationService = require('../services/notificationService');

// Controlador para enviar uma notificação para um usuário
exports.sendNotification = async (req, res) => {
  const { userId, message } = req.body;

  try {
    await notificationService.sendNotification(userId, message);
    res.status(200).json({ message: 'Notificação enviada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar notificação', error: error.message });
  }
};

// Controlador para listar as notificações de um usuário
exports.getUserNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await notificationService.getUserNotifications(userId);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notificações', error: error.message });
  }
};
