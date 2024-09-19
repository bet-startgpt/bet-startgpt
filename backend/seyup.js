const mongoose = require('mongoose');
const prompt = require('prompt-sync')(); // Biblioteca para entrada de dados no terminal
const axios = require('axios');
const ApiConfiguration = require('./models/ApiConfiguration');

// Função para verificar a conexão com o MongoDB e solicitar as credenciais
const checkDatabaseConnection = async () => {
  const ip = prompt('Digite o IP do banco de dados MongoDB: ');
  const dbName = prompt('Digite o nome do banco de dados: ');
  const username = prompt('Digite o nome de usuário do banco de dados: ');
  const password = prompt('Digite a senha do banco de dados: ');

  const mongoUri = `mongodb://${username}:${password}@${ip}/${dbName}`;

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',
    });
    console.log('Conectado ao MongoDB com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

// Função para verificar a conexão com as APIs e seus limites
const checkAPIConnections = async () => {
  const footyStatsKey = prompt('Digite sua chave da API FootyStats: ');
  const highlightlyKey = prompt('Digite sua chave da API Highlightly: ');
  const oddsKey = prompt('Digite sua chave da API Odds: ');
  const picpayKey = prompt('Digite sua chave da API PicPay: ');

  // Verificação da conexão com a API FootyStats
  const footyStatsLimit = await verifyAPILimits('FootyStats', footyStatsKey, 'https://api.footystats.org/plan');
  // Verificação da conexão com a API Highlightly
  const highlightlyLimit = await verifyAPILimits('Highlightly', highlightlyKey, 'https://api.highlightly.com/plan');
  // Verificação da conexão com a API Odds
  const oddsLimit = await verifyAPILimits('Odds', oddsKey, 'https://api.oddsapi.io/plan');
  // Verificação da conexão com a API PicPay
  const picpayLimit = await verifyAPILimits('PicPay', picpayKey, 'https://api.picpay.com/plan');

  // Salvando as configurações no banco de dados
  await saveAPIConfigurations([
    { apiName: 'FootyStats', apiKey: footyStatsKey, limit: footyStatsLimit },
    { apiName: 'Highlightly', apiKey: highlightlyKey, limit: highlightlyLimit },
    { apiName: 'Odds API', apiKey: oddsKey, limit: oddsLimit },
    { apiName: 'PicPay', apiKey: picpayKey, limit: picpayLimit }
  ]);

  console.log('Configurações de APIs salvas com sucesso.');
};

// Função para verificar os limites da API e a chave
const verifyAPILimits = async (apiName, apiKey, apiUrl) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    console.log(`${apiName} conectado com sucesso.`);
    console.log(`${apiName} Limite de Uso: ${response.data.limit}`);
    return response.data.limit;
  } catch (error) {
    console.error(`Erro ao conectar à API ${apiName}:`, error.message);
    return 0;
  }
};

// Função para salvar as configurações de APIs no MongoDB
const saveAPIConfigurations = async (apiConfigs) => {
  try {
    await ApiConfiguration.deleteMany();  // Limpa as configurações anteriores
    await ApiConfiguration.insertMany(apiConfigs);  // Insere as novas configurações
  } catch (error) {
    console.error('Erro ao salvar as configurações de API no MongoDB:', error.message);
  }
};

// Função principal para rodar o setup
const runSetup = async () => {
  await checkDatabaseConnection();
  await checkAPIConnections();
};

runSetup();
