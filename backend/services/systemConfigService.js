const SystemConfig = require('../models/SystemConfig');

// Serviço para alterar configuração do sistema
exports.updateSystemConfig = async (configName, value) => {
  try {
    const config = await SystemConfig.findOne({ configName });
    if (!config) throw new Error('Configuração não encontrada');

    config.value = value;
    await config.save();
    return config;
  } catch (error) {
    throw new Error(`Erro ao atualizar configuração: ${error.message}`);
  }
};

// Serviço para buscar configuração do sistema
exports.getSystemConfig = async (configName) => {
  try {
    const config = await SystemConfig.findOne({ configName });
    if (!config) throw new Error('Configuração não encontrada');

    return config;
  } catch (error) {
    throw new Error(`Erro ao buscar configuração: ${error.message}`);
  }
};
