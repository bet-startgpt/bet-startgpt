const axios = require('axios');
const ApiConfiguration = require('../models/ApiConfiguration');

// Verifica se a API está dentro dos limites de consumo
exports.checkApiLimits = async (apiName) => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName });

    if (!apiConfig || !apiConfig.enabled) {
      throw new Error(`API ${apiName} desativada ou não configurada.`);
    }

    // Exemplo de requisição de verificação de limite
    const response = await axios.get(`https://api.${apiName}.com/usage`, {
      headers: { 'Authorization': `Bearer ${apiConfig.apiKey}` }
    });

    if (response.data.usage > apiConfig.limit) {
      throw new Error(`Limite da API ${apiName} excedido.`);
    }

    return response.data;
  } catch (error) {
    console.error(`Erro ao verificar limites da API ${apiName}:`, error.message);
    throw error;
  }
};
