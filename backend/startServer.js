const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

// Carregar variáveis de ambiente
dotenv.config();

// Conectar ao banco de dados
connectDB();

// Inicializa o servidor
const app = express();
app.use(express.json());

// Carrega as rotas
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));
app.use('/api/tips', require('./routes/tipRoutes'));

// Middleware de erro
app.use(errorHandler);

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
