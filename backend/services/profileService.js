const User = require('../models/User');

// Serviço para atualizar perfil do usuário
exports.updateUserProfile = async (userId, profileData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, profileData, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error('Erro ao atualizar perfil do usuário: ' + error.message);
  }
};
