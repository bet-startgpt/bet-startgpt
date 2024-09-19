const UserAccess = require('../models/UserAccess');

// Serviço para verificar o nível de acesso do usuário
exports.checkAccess = async (userId, requiredAccessLevel) => {
  try {
    const userAccess = await UserAccess.findOne({ userId });

    if (!userAccess || userAccess.level < requiredAccessLevel) {
      throw new Error('Acesso negado');
    }

    return true;
  } catch (error) {
    throw new Error('Erro ao verificar nível de acesso');
  }
};

// Serviço para atribuir ou atualizar nível de acesso do usuário
exports.setAccessLevel = async (userId, level) => {
  try {
    let userAccess = await UserAccess.findOne({ userId });

    if (!userAccess) {
      userAccess = new UserAccess({ userId, level });
    } else {
      userAccess.level = level;
    }

    await userAccess.save();
  } catch (error) {
    throw new Error('Erro ao definir nível de acesso');
  }
};
