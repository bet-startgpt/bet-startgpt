const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://betuser:@Betuser2025@64.176.3.144:27017/bot_telegram', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',  // Autenticação no banco admin
    });
    console.log('Conectado ao MongoDB com sucesso.');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);  // Sair da aplicação em caso de erro
  }
};

module.exports = connectDB;
