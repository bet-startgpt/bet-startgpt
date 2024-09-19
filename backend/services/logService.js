const fs = require('fs');
const path = require('path');
const Log = require('../models/Log');

// Função para registrar logs em arquivo e banco de dados
exports.logEvent = async (message, level = 'info', userId = null) => {
  try {
    // Registro de log em arquivo local
    const logPath = path.resolve(__dirname, '../../logs/system.log');
    const logMessage = `${new Date().toISOString()} - ${level.toUpperCase()}: ${message}\n`;
    fs.appendFileSync(logPath, logMessage);

    // Registro de log no banco de dados (MongoDB)
    const log = new Log({ userId, activity: message, type: level });
    await log.save();
  } catch (error) {
    console.error('Erro ao registrar log:', error.message);
  }
};

// Função para buscar logs de arquivo
exports.getLogs = (filter = null) => {
  const logPath = path.resolve(__dirname, '../../logs/system.log');
  try {
    const logs = fs.readFileSync(logPath, 'utf-8');
    if (filter) {
      return logs.split('\n').filter(log => log.includes(filter));
    }
    return logs.split('\n');
  } catch (error) {
    console.error('Erro ao buscar logs:', error.message);
    return [];
  }
};

// Função para buscar logs de banco de dados (MongoDB)
exports.getLogsFromDB = async (filter = null) => {
  try {
    const query = filter ? { activity: { $regex: filter, $options: 'i' } } : {};
    return await Log.find(query).sort({ createdAt: -1 });
  } catch (error) {
    throw new Error('Erro ao buscar logs do banco de dados: ' + error.message);
  }
};
