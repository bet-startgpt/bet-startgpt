const permissionService = require('../services/permissionService');

// Controlador para adicionar uma permissão ao usuário
exports.addPermission = async (req, res) => {
  const { userId, permissionType, module } = req.body;

  try {
    const result = await permissionService.addPermission(userId, permissionType, module);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: `Erro ao adicionar permissão: ${error.message}` });
  }
};

// Controlador para remover uma permissão do usuário
exports.removePermission = async (req, res) => {
  const { userId, permissionType, module } = req.body;

  try {
    const result = await permissionService.removePermission(userId, permissionType, module);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: `Erro ao remover permissão: ${error.message}` });
  }
};

// Controlador para listar todas as permissões de um usuário
exports.getUserPermissions = async (req, res) => {
  const { userId } = req.params;

  try {
    const permissions = await permissionService.getUserPermissions(userId);
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ message: `Erro ao buscar permissões: ${error.message}` });
  }
};
