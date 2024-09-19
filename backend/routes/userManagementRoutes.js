const express = require('express');
const router = express.Router();
const userManagementController = require('../controllers/userManagementController');

// Rota para listar todos os usuários
router.get('/', userManagementController.getAllUsers);

// Rota para atualizar dados de um usuário
router.put('/:userId', userManagementController.updateUser);

// Rota para deletar um usuário
router.delete('/:userId', userManagementController.deleteUser);

module.exports = router;
