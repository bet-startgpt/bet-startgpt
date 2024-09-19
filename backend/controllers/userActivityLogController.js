const userActivityLogService = require('../services/userActivityLogService');

// Registrar atividade do usuário
exports.logActivity = async (req, res) => {
  const { userId, activity } = req.body;

  try {
    const log = await userActivityLogService.logActivity(userId, activity);
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar atividade do usuário', error });
  }
};

// Buscar logs de atividades de um usuário
exports.getUserActivityLogs = async (req, res) => {
  const { userId } = req.params;

  try {
    const logs = await userActivityLogService.getUserActivityLogs(userId);
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar atividades do usuário', error });
  }
};
