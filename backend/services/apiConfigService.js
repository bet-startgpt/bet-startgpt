const ApiConfiguration = require('../models/ApiConfiguration');

// Serviço para atualizar chave de API
exports.updateApiKey = async (apiName, apiKey) => {
  try {
    const apiConfig = await ApiConfiguration.findOneAndUpdate(
      { apiName },
      { apiKey },
      { new: true, upsert: true }
    );
    return apiConfig;
  } catch (error) {
    throw new Error('Erro ao atualizar chave da API');
  }
};

// Serviço para ativar/desativar uma API
exports.toggleApiStatus = async (apiName, enabled) => {
  try {
    const apiConfig = await ApiConfiguration.findOneAndUpdate(
      { apiName },
      { enabled },
      { new: true }
    );
    return apiConfig;
  } catch (error) {
    throw new Error('Erro ao alterar status da API');
  }
};
