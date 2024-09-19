const userSettingsService = require('../services/userSettingsService');

// Controlador para atualizar configurações do usuário
exports.updateUserSettings = async (req, res) => {
  const { userId } = req.params;
  const { tipsEnabled, dailyTipsLimit, notificationsEnabled } = req.body;

  try {
    const updatedSettings = await userSettingsService.updateUserSettings(userId, {
      tipsEnabled,
      dailyTipsLimit,
      notificationsEnabled
    });
    res.status(200).json({ message: 'Configurações do usuário atualizadas', settings: updatedSettings });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar configurações do usuário', error: error.message });
  }
};

// Controlador para buscar configurações do usuário
exports.getUserSettings = async (req, res) => {
  const { userId } = req.params;

  try {
    const settings = await userSettingsService.getUserSettings(userId);
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar configurações do usuário', error: error.message });
  }
};
