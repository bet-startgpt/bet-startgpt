const User = require('../models/User');

// Middleware para verificar se o usuário é administrador
const isAdmin = async (req, res, next) => {
  const userId = req.user ? req.user._id : null;
  const user = await User.findById(userId);

  if (user && user.role === 'admin') {
    return next();
  } else {
    return res.status(403).json({ message: 'Acesso negado. Apenas administradores podem acessar essa rota.' });
  }
};

module.exports = isAdmin;
