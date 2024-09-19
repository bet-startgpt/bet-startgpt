const UserSettings = require('../models/UserSettings');

// Serviço para atualizar as configurações do usuário
exports.updateUserSettings = async (userId, settings) => {
  return await UserSettings.findOneAndUpdate({ userId }, settings, { new: true, upsert: true });
};

// Serviço para buscar configurações do usuário
exports.getUserSettings = async (userId) => {
  return await UserSettings.findOne({ userId });
};
