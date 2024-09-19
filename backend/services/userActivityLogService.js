const UserActivityLog = require('../models/UserActivityLog');

// Registrar atividade do usuário
exports.logActivity = async (userId, activity) => {
  try {
    const log = new UserActivityLog({ userId, activity });
    await log.save();
    return log;
  } catch (error) {
    throw new Error('Erro ao registrar atividade do usuário');
  }
};

// Buscar logs de atividades de um usuário
exports.getUserActivityLogs = async (userId) => {
  try {
    return await UserActivityLog.find({ userId });
  } catch (error) {
    throw new Error('Erro ao buscar atividades do usuário');
  }
};
