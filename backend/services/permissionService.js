const Permission = require('../models/Permission');

// Serviço para adicionar uma permissão ao usuário
exports.addPermission = async (userId, permissionType, module) => {
  try {
    const permission = new Permission({ userId, permissionType, module });
    await permission.save();
    return permission;
  } catch (error) {
    throw new Error(`Erro ao adicionar permissão: ${error.message}`);
  }
};

// Serviço para remover uma permissão do usuário
exports.removePermission = async (userId, permissionType, module) => {
  try {
    await Permission.deleteOne({ userId, permissionType, module });
    return { message: 'Permissão removida com sucesso' };
  } catch (error) {
    throw new Error(`Erro ao remover permissão: ${error.message}`);
  }
};

// Serviço para buscar permissões de um usuário
exports.getUserPermissions = async (userId) => {
  try {
    return await Permission.find({ userId });
  } catch (error) {
    throw new Error(`Erro ao buscar permissões: ${error.message}`);
  }
};
