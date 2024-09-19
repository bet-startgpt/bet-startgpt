const Subscription = require('../models/Subscription');

// Criar uma nova assinatura
exports.createSubscription = async (userId, plan) => {
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);  // Assinatura de 30 dias

  const subscription = new Subscription({
    userId,
    plan,
    endDate
  });

  try {
    await subscription.save();
    return subscription;
  } catch (error) {
    throw new Error('Erro ao criar assinatura');
  }
};

// Verificar o status da assinatura
exports.checkSubscriptionStatus = async (userId) => {
  try {
    const subscription = await Subscription.findOne({ userId });
    if (!subscription) throw new Error('Assinatura não encontrada');
    
    const isExpired = new Date() > subscription.endDate;
    return { subscription, isExpired };
  } catch (error) {
    throw new Error('Erro ao verificar status da assinatura');
  }
};
