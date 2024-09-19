const ApiConfiguration = require('../models/ApiConfiguration');

// Middleware para verificar se a API está configurada corretamente
const apiValidationMiddleware = async (req, res, next) => {
  try {
    const apiConfig = await ApiConfiguration.findOne({ apiName: req.params.apiName });
    if (!apiConfig || !apiConfig.enabled) {
      return res.status(403).json({ message: 'API não configurada ou desativada' });
    }
    next();  // Continua para a próxima função
  } catch (error) {
    res.status(500).json({ message: 'Erro ao validar a API', error });
  }
};

module.exports = apiValidationMiddleware;
