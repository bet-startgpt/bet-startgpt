const { exec } = require('child_process');
const path = require('path');

// Serviço para realizar backups automáticos do MongoDB
exports.backupDatabase = async () => {
  const backupPath = path.resolve(__dirname, '../../backups');
  const backupFile = `${backupPath}/backup_${new Date().toISOString()}.gz`;

  try {
    exec(`mongodump --uri ${process.env.MONGODB_URI} --archive=${backupFile} --gzip`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao fazer backup: ${stderr}`);
        throw new Error('Falha no backup do banco de dados');
      }
      console.log(`Backup realizado com sucesso: ${backupFile}`);
    });
  } catch (error) {
    throw new Error(`Erro ao fazer backup: ${error.message}`);
  }
};
