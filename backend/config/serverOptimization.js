module.exports = {
  maxConnections: 100,  // Limitar o número máximo de conexões simultâneas
  timeout: 120000,  // Tempo limite de 2 minutos para requests
  keepAliveTimeout: 5000,  // Manter conexões ativas por 5 segundos
  compression: true,  // Habilitar compressão de respostas
  corsOptions: {
    origin: '*',  // Permitir requisições de todos os domínios
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  }
};
