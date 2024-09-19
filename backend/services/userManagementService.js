const User = require('../models/User');

// Atualiza o plano de um usuário
exports.updateUserPlan = async (userId, newPlan) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('Usuário não encontrado');
    
    user.plan = newPlan;
    await user.save();

    return { message: 'Plano atualizado com sucesso' };
  } catch (error) {
    throw new Error('Erro ao atualizar o plano do usuário');
  }
};

// Busca informações detalhadas de um usuário
exports.getUserDetails = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('Usuário não encontrado');

    return user;
  } catch (error) {
    throw new Error('Erro ao buscar detalhes do usuário');
  }
};
