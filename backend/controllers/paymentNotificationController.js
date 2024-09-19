const PaymentNotification = require('../models/PaymentNotification');
const paymentNotificationService = require('../services/paymentNotificationService');

// Enviar notificação de pagamento manualmente
exports.sendNotification = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const notification = await paymentNotificationService.sendPaymentNotification(userId, message);
    res.status(200).json({ message: 'Notificação enviada com sucesso', notification });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar notificação', error });
  }
};

// Buscar notificações de pagamento de um usuário
exports.getUserNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await PaymentNotification.find({ userId });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notificações', error });
  }
};
