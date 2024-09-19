const User = require('../models/User');

// Middleware para verificar se o usuário tem um plano ativo
const hasActivePlan = async (req, res, next) => {
  const userId = req.user ? req.user._id : null;

  try {
    const user = await User.findById(userId).populate('plan');
    if (!user || !user.plan || user.plan.status !== 'active') {
      return res.status(403).json({ message: 'Acesso negado. Plano inativo ou inexistente.' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: `Erro ao verificar o plano: ${error.message}` });
  }
};

module.exports = hasActivePlan;
