const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente
dotenv.config();

// Conecta ao MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/bot_telegram';
connectDB(mongoUri);

const app = express();
app.use(express.json());

// Rota básica de exemplo
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Definindo a porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
