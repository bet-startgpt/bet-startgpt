const ActivityLog = require('../models/ActivityLog');

// Serviço para registrar atividades do usuário
exports.logActivity = async (userId, activity) => {
  try {
    const newLog = new ActivityLog({ userId, activity });
    await newLog.save();
    return newLog;
  } catch (error) {
    console.error('Erro ao registrar atividade:', error.message);
    throw new Error('Erro ao registrar atividade.');
  }
};

// Serviço para buscar logs de atividades de um usuário
exports.getUserActivityLogs = async (userId) => {
  try {
    return await ActivityLog.find({ userId });
  } catch (error) {
    console.error('Erro ao buscar atividades:', error.message);
    throw new Error('Erro ao buscar atividades.');
  }
};
