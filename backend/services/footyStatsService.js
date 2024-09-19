const axios = require('axios');
const ApiConfiguration = require('../models/ApiConfiguration');

// Serviço para buscar dados da FootyStats API
exports.fetchFootyStats = async () => {
  try {
    // Busca a configuração da API no banco de dados
    const apiConfig = await ApiConfiguration.findOne({ apiName: 'FootyStats' });

    // Verifica se a API está ativada
    if (!apiConfig || !apiConfig.enabled) {
      throw new Error('API FootyStats desativada ou não configurada.');
    }

    // Usa a chave do banco de dados ou da variável de ambiente
    const apiKey = apiConfig.apiKey || process.env.FOOTYSTATS_API_KEY;

    const response = await axios.get('https://api.footystats.org/endpoint', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar dados da FootyStats API: ${error.message}`);
  }
};
