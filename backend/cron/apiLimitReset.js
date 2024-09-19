const cron = require('node-cron');
const ApiLimit = require('../models/ApiLimit');

// Tarefa cron para resetar os limites de API todo mês
cron.schedule('0 0 1 * *', async () => {
  try {
    console.log('Resetando limites de API...');
    await ApiLimit.updateMany({}, { requestsMade: 0 });
  } catch (error) {
    console.error('Erro ao resetar limites de API:', error.message);
  }
});
