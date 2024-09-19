const axios = require('axios');
const ApiConfiguration = require('../models/ApiConfiguration');

// Serviço para buscar dados de escanteios de uma API externa
exports.fetchCornerStats = async () => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName: 'CornerStats' });
    if (!apiConfig || !apiConfig.enabled) {
      throw new Error('API de escanteios desativada ou não configurada.');
    }

    const response = await axios.get('https://api.cornerstats.com/endpoint', {
      headers: { 'Authorization': `Bearer ${apiConfig.apiKey}` }
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados de escanteios: ' + error.message);
  }
};
