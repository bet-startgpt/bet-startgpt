const apiKeyService = require('../services/apiKeyService');

// Controlador para atualizar chave de API
exports.updateApiKey = async (req, res) => {
  const { apiName } = req.params;
  const { newKey } = req.body;

  try {
    const updatedApi = await apiKeyService.updateApiKey(apiName, newKey);
    res.status(200).json({ message: `Chave da API ${apiName} atualizada com sucesso`, api: updatedApi });
  } catch (error) {
    res.status(500).json({ message: `Erro ao atualizar chave da API: ${error.message}` });
  }
};

// Controlador para alternar status de API
exports.toggleApiStatus = async (req, res) => {
  const { apiName } = req.params;

  try {
    const status = await apiKeyService.toggleApiStatus(apiName);
    res.status(200).json({ message: `Status da API ${apiName} alterado para ${status ? 'ativo' : 'inativo'}` });
  } catch (error) {
    res.status(500).json({ message: `Erro ao alternar status da API: ${error.message}` });
  }
};
