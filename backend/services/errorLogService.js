const ErrorLog = require('../models/ErrorLog');

// Serviço para registrar erros no banco de dados
exports.logError = async (message, stack, userId = null) => {
  try {
    const errorLog = new ErrorLog({
      message,
      stack,
      userId
    });
    await errorLog.save();
  } catch (error) {
    console.error('Erro ao registrar o log de erro:', error.message);
  }
};
