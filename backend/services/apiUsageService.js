// /backend/services/apiUsageService.js

const ApiConfiguration = require('../models/ApiConfiguration');
const notificationService = require('./notificationService');

// Serviço para monitorar limites de uso de APIs
exports.checkApiUsage = async (apiName) => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName });
    if (!apiConfig) throw new Error('API não configurada.');

    // Verifica o uso atual da API e compara com o limite configurado
    if (apiConfig.usage >= apiConfig.limit) {
      console.warn(`A API ${apiName} está perto de atingir o limite.`);

      // Enviar notificação ao admin sobre o limite de uso
      await notificationService.sendNotificationToAdmin({
        message: `A API ${apiName} atingiu ${apiConfig.usage} de ${apiConfig.limit} chamadas.`,
      });
    }
  } catch (error) {
    throw new Error('Erro ao verificar uso da API: ' + error.message);
  }
};

// Serviço para definir limite de uso de uma API
exports.setApiLimit = async (apiName, limit) => {
  try {
    const apiConfig = await ApiConfiguration.findOneAndUpdate(
      { apiName },
      { limit },
      { new: true, upsert: true }
    );
    return apiConfig;
  } catch (error) {
    throw new Error(`Erro ao definir limite da API: ${error.message}`);
  }
};

// Serviço para buscar o limite de uma API
exports.getApiLimit = async (apiName) => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName });
    return apiConfig;
  } catch (error) {
    throw new Error(`Erro ao buscar limite da API: ${error.message}`);
  }
};
