const Tip = require('../models/Tip');
const ApiUsage = require('../models/ApiUsage');

// Serviço para gerar relatórios automáticos de performance e uso de APIs
exports.generateReports = async () => {
  try {
    // Relatório de performance dos sinais
    const totalTips = await Tip.countDocuments({});
    const avgOdds = await Tip.aggregate([{ $group: { _id: null, avgOdds: { $avg: "$odds" } } }]);

    // Relatório de consumo de APIs
    const apiUsage = await ApiUsage.aggregate([
      { $group: { _id: "$apiName", totalCalls: { $sum: "$calls" } } }
    ]);

    return {
      performanceReport: {
        totalTips,
        avgOdds: avgOdds[0] ? avgOdds[0].avgOdds : 0
      },
      apiUsageReport: apiUsage
    };
  } catch (error) {
    throw new Error(`Erro ao gerar relatórios: ${error.message}`);
  }
};

// Serviço para gerar relatório de usuários
exports.generateUserReport = async () => {
  const users = await User.find();
  return {
    totalUsers: users.length,
    activeUsers: users.filter(user => user.isActive).length,
    inactiveUsers: users.filter(user => !user.isActive).length
  };
};

// Serviço para gerar relatório de tips
exports.generateTipReport = async () => {
  const tips = await Tip.find();
  return {
    totalTips: tips.length,
    successfulTips: tips.filter(tip => tip.isSuccess).length,
    failedTips: tips.filter(tip => !tip.isSuccess).length
  };
};

// Serviço para gerar relatório de pagamentos
exports.generatePaymentReport = async () => {
  const payments = await Payment.find();
  return {
    totalPayments: payments.length,
    successfulPayments: payments.filter(payment => payment.paymentStatus === 'Success').length,
    failedPayments: payments.filter(payment => payment.paymentStatus === 'Failed').length
  };
};