const axios = require('axios');
const ApiConfiguration = require('../models/ApiConfiguration');

// Serviço para buscar odds de apostas via Odds API
exports.fetchOdds = async () => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName: 'OddsAPI' });
    if (!apiConfig || !apiConfig.enabled) {
      throw new Error('API Odds desativada ou não configurada.');
    }

    const response = await axios.get('https://api.oddsapi.com/v4/sports', {
      headers: { 'Authorization': `Bearer ${apiConfig.apiKey}` }
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar odds da API: ' + error.message);
  }
};
