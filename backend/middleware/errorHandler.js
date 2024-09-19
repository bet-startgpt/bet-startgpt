const errorLogService = require('../services/errorLogService');

// Middleware de tratamento de erros
const errorHandler = (err, req, res, next) => {
  const userId = req.user ? req.user._id : null;  // Captura o ID do usuário, se houver
  
  // Loga o erro no banco de dados
  errorLogService.logError(err.message, err.stack, userId);

  // Exibe o erro no console e responde ao cliente
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno no servidor', error: err.message });
};

module.exports = errorHandler;
