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
