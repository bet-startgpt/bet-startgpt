const fs = require('fs');
const path = require('path');
const logService = require('../services/logService');

// Controlador para buscar todos os logs do sistema (de arquivo local)
exports.getLogs = async (req, res) => {
  const logPath = path.resolve(__dirname, '../../logs/system.log');
  try {
    const logs = fs.readFileSync(logPath, 'utf-8');
    res.status(200).send(logs);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar logs', error });
  }
};

// Controlador para buscar apenas logs de erros (de arquivo local)
exports.getErrorLogs = async (req, res) => {
  const logPath = path.resolve(__dirname, '../../logs/system.log');
  try {
    const logs = fs.readFileSync(logPath, 'utf-8');
    const errorLogs = logs.split('\n').filter(log => log.includes('ERROR'));
    res.status(200).send(errorLogs.join('\n'));
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar logs de erros', error });
  }
};

// Controlador para buscar logs de atividades (de banco de dados MongoDB)
exports.getUserActivityLogs = async (req, res) => {
  const userId = req.params.userId;
  try {
    const logs = await logService.getUserActivityLogs(userId);
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar logs de atividade', error: error.message });
  }
};

// Controlador para buscar logs de erros (de banco de dados MongoDB)
exports.getLogsFromDB = async (req, res) => {
  try {
    const logs = await logService.getErrorLogs();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar logs de erros no banco de dados', error: error.message });
  }
};
