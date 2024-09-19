const ApiConfiguration = require('../models/ApiConfiguration');
const apiConfigService = require('../services/apiConfigService');

// Controlador para atualizar chave de API
exports.updateApiKey = async (req, res) => {
  const { apiName, apiKey } = req.body;

  try {
    const apiConfig = await apiConfigService.updateApiKey(apiName, apiKey);
    res.status(200).json(apiConfig);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar chave da API', error });
  }
};

// Controlador para ativar/desativar API
exports.toggleApiStatus = async (req, res) => {
  const { apiName, enabled } = req.body;

  try {
    const apiConfig = await apiConfigService.toggleApiStatus(apiName, enabled);
    res.status(200).json(apiConfig);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao alterar status da API', error });
  }
};
