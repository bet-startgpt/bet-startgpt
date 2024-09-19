const axios = require('axios');
const ApiConfiguration = require('../models/ApiConfiguration');

// Serviço para buscar dados da Highlightly API
exports.fetchHighlightlyData = async () => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName: 'Highlightly' });
    if (!apiConfig || !apiConfig.enabled) {
      throw new Error('API Highlightly desativada ou não configurada.');
    }

    const response = await axios.get('https://api.highlightly.com/endpoint', {
      headers: { 'Authorization': `Bearer ${apiConfig.apiKey}` }
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados da Highlightly API');
  }
};
