const rateLimit = require('express-rate-limit');

// Middleware para limitar o número de requisições
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita a 100 requisições por 15 minutos
  message: 'Muitas requisições deste IP. Por favor, tente novamente mais tarde.'
});

module.exports = limiter;
