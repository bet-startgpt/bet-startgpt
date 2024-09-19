const UserConfig = require('../models/UserConfig');

// Atualiza as configurações do usuário
exports.updateUserConfig = async (req, res) => {
  const { userId, tipsPerDay, preferredTeams, receiveNotifications } = req.body;

  try {
    let userConfig = await UserConfig.findOne({ userId });
    if (!userConfig) {
      userConfig = new UserConfig({ userId, tipsPerDay, preferredTeams, receiveNotifications });
    } else {
      userConfig.tipsPerDay = tipsPerDay;
      userConfig.preferredTeams = preferredTeams;
      userConfig.receiveNotifications = receiveNotifications;
    }
    await userConfig.save();
    res.status(200).json({ message: 'Configurações atualizadas com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar configurações', error });
  }
};

// Busca as configurações do usuário
exports.getUserConfig = async (req, res) => {
  const { userId } = req.params;

  try {
    const userConfig = await UserConfig.findOne({ userId });
    if (!userConfig) {
      return res.status(404).json({ message: 'Configurações não encontradas' });
    }
    res.status(200).json(userConfig);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar configurações', error });
  }
};
