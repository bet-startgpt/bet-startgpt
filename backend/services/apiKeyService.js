const ApiConfiguration = require('../models/ApiConfiguration');

// Serviço para atualizar chave de API
exports.updateApiKey = async (apiName, newKey) => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName });
    if (!apiConfig) {
      throw new Error('API não encontrada');
    }
    apiConfig.apiKey = newKey;
    await apiConfig.save();
    return apiConfig;
  } catch (error) {
    throw new Error(`Erro ao atualizar chave da API: ${error.message}`);
  }
};

// Serviço para alternar ativação de API
exports.toggleApiStatus = async (apiName) => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName });
    if (!apiConfig) throw new Error('API não encontrada');

    apiConfig.enabled = !apiConfig.enabled;
    await apiConfig.save();
    return apiConfig.enabled;
  } catch (error) {
    throw new Error(`Erro ao alternar status da API: ${error.message}`);
  }
};
