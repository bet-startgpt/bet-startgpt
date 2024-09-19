const ScheduledNotification = require('../models/ScheduledNotification');

// Controlador para agendar uma nova notificação
exports.scheduleNotification = async (req, res) => {
  const { userId, message, scheduledDate } = req.body;

  try {
    const newNotification = new ScheduledNotification({
      userId,
      message,
      scheduledDate
    });
    await newNotification.save();
    res.status(201).json({ message: 'Notificação agendada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao agendar notificação', error: error.message });
  }
};
