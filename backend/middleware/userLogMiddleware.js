const fs = require('fs');
const path = require('path');

const logUserActivity = (req, res, next) => {
  const logPath = path.join(__dirname, '../logs/userActivity.log');
  const logMessage = `${new Date().toISOString()} - Usuário: ${req.user.id} - Ação: ${req.method} ${req.originalUrl}\n`;

  fs.appendFile(logPath, logMessage, (error) => {
    if (error) {
      console.error('Erro ao salvar log de atividade do usuário:', error.message);
    }
  });

  next();
};

module.exports = logUserActivity;
