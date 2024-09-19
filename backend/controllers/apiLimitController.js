// /backend/controllers/apiLimitController.js

const apiUsageService = require('../services/apiUsageService');

// Controlador para definir o limite de uma API
exports.setApiLimit = async (req, res) => {
  const { apiName, limit } = req.body;

  try {
    const apiLimit = await apiUsageService.setApiLimit(apiName, limit);
    res.status(200).json(apiLimit);
  } catch (error) {
    res.status(500).json({ message: `Erro ao definir limite da API: ${error.message}` });
  }
};

// Controlador para buscar o limite de uma API
exports.getApiLimit = async (req, res) => {
  const { apiName } = req.query;

  try {
    const apiLimit = await apiUsageService.getApiLimit(apiName);
    res.status(200).json(apiLimit);
  } catch (error) {
    res.status(500).json({ message: `Erro ao buscar limite da API: ${error.message}` });
  }
};

// Controlador para monitorar o uso de uma API e notificar se estiver perto do limite
exports.checkApiUsage = async (req, res) => {
  const { apiName } = req.params;

  try {
    await apiUsageService.checkApiUsage(apiName);
    res.status(200).json({ message: `Verificação de uso da API ${apiName} realizada.` });
  } catch (error) {
    res.status(500).json({ message: `Erro ao verificar uso da API: ${error.message}` });
  }
};
