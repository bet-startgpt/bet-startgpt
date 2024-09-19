const UserProfile = require('../models/UserProfile');

// Serviço para criar ou atualizar um perfil de usuário
exports.saveUserProfile = async (userId, profileData) => {
  try {
    let profile = await UserProfile.findOne({ userId });

    if (!profile) {
      profile = new UserProfile({ userId, ...profileData });
    } else {
      Object.assign(profile, profileData);
    }

    await profile.save();
    return profile;
  } catch (error) {
    throw new Error(`Erro ao salvar perfil de usuário: ${error.message}`);
  }
};

// Serviço para buscar o perfil de um usuário
exports.getUserProfile = async (userId) => {
  try {
    const profile = await UserProfile.findOne({ userId });
    if (!profile) throw new Error('Perfil não encontrado');
    return profile;
  } catch (error) {
    throw new Error(`Erro ao buscar perfil de usuário: ${error.message}`);
  }
};
