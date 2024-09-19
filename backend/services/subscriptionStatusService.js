const Subscription = require('../models/Subscription');

// Serviço para verificar se a assinatura do usuário está ativa
exports.checkIfActive = async (userId) => {
  try {
    const subscription = await Subscription.findOne({ userId });
    if (!subscription || subscription.endDate < Date.now()) {
      return false;  // Assinatura expirada
    }
    return true;
  } catch (error) {
    throw new Error(`Erro ao verificar status da assinatura: ${error.message}`);
  }
};
