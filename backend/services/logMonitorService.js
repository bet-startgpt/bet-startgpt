const fs = require('fs');
const path = require('path');

// Serviço para armazenar logs em arquivo
exports.logEvent = async (message, level = 'info') => {
  try {
    const logPath = path.resolve(__dirname, '../../logs/system.log');
    const logMessage = `${new Date().toISOString()} - ${level.toUpperCase()}: ${message}\n`;
    fs.appendFile(logPath, logMessage, (err) => {
      if (err) throw err;
    });
  } catch (error) {
    console.error('Erro ao registrar log:', error.message);
  }
};
