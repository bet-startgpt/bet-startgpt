const { exec } = require('child_process');
const path = require('path');
const backupPath = path.join(__dirname, '../backups/backup_' + new Date().toISOString() + '.gz');

// Comando para backup do MongoDB
const backupCommand = `mongodump --uri "${process.env.MONGO_URI}" --archive=${backupPath} --gzip`;

exec(backupCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao fazer backup do banco de dados: ${error.message}`);
    return;
  }
  console.log('Backup do banco de dados realizado com sucesso:', backupPath);
});
