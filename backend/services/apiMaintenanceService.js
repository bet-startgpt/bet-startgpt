const axios = require('axios');

// Serviço para verificar a saúde das APIs integradas
exports.checkApiHealth = async (apiName, apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    if (response.status === 200) {
      return { apiName, status: 'OK', timestamp: new Date().toISOString() };
    } else {
      return { apiName, status: 'Unavailable', timestamp: new Date().toISOString() };
    }
  } catch (error) {
    return { apiName, status: 'Error', timestamp: new Date().toISOString(), error: error.message };
  }
};
