const fs = require('fs');
const path = require('path');

// Middleware para registrar erros no arquivo de log
const logErrorMiddleware = (err, req, res, next) => {
  const logPath = path.join(__dirname, '../logs/error.log');
  const logMessage = `${new Date().toISOString()} - Erro: ${err.message}\n`;

  // Escreve o erro no arquivo de log
  fs.appendFile(logPath, logMessage, (error) => {
    if (error) {
      console.error('Erro ao salvar no log:', error.message);
    }
  });

  // Continua o fluxo de tratamento de erro
  next(err);
};

module.exports = logErrorMiddleware;
