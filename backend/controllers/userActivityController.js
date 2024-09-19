const UserActivity = require('../models/UserActivity');

// Controlador para buscar atividades de um usuário específico
exports.getUserActivities = async (req, res) => {
  const { userId } = req.params;

  try {
    const activities = await UserActivity.find({ userId });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar atividades do usuário', error });
  }
};
