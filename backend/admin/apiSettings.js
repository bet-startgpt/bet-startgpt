const ApiConfiguration = require('../models/ApiConfiguration');

// Função para listar todas as configurações de API
exports.getApiSettings = async (req, res) => {
  try {
    const apiConfigs = await ApiConfiguration.find({});
    res.json(apiConfigs);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar configurações de API', error });
  }
};

// Função para atualizar o status de uma API (ativar/desativar)
exports.updateApiStatus = async (req, res) => {
  const { apiName, enabled } = req.body;

  try {
    const apiConfig = await ApiConfiguration.findOneAndUpdate(
      { apiName },
      { enabled },
      { new: true }
    );

    if (!apiConfig) {
      return res.status(404).json({ message: 'API não encontrada' });
    }

    res.json({ message: 'Configuração de API atualizada com sucesso', apiConfig });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar configuração de API', error });
  }
};
