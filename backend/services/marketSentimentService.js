const axios = require('axios');
const ApiConfiguration = require('../models/ApiConfiguration');

// Serviço para buscar dados de sentimento de mercado via API
exports.fetchMarketSentiment = async () => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName: 'MarketSentiment' });
    if (!apiConfig || !apiConfig.enabled) {
      throw new Error('API de Sentimento de Mercado desativada ou não configurada.');
    }

    const response = await axios.get('https://api.sentiment.com/market', {
      headers: { 'Authorization': `Bearer ${apiConfig.apiKey}` }
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados da API de Sentimento de Mercado');
  }
};
