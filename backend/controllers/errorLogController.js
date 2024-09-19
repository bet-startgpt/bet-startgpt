const ErrorLog = require('../models/ErrorLog');

// Controlador para buscar todos os logs de erro
exports.getAllErrorLogs = async (req, res) => {
  try {
    const logs = await ErrorLog.find({});
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: `Erro ao buscar logs de erro: ${error.message}` });
  }
};
