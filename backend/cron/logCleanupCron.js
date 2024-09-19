const cron = require('node-cron');
const logService = require('../services/logService');

// Tarefa cron para limpar logs antigos mensalmente
cron.schedule('0 0 1 * *', async () => {  // Executa no primeiro dia de cada mês
  try {
    console.log('Limpando logs antigos...');
    await logService.cleanOldLogs();  // Chama a função do serviço de limpeza de logs
  } catch (error) {
    console.error('Erro ao limpar logs antigos:', error.message);
  }
});
