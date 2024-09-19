const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');

// Rota para adicionar uma permissão ao usuário
router.post('/add', permissionController.addPermission);

// Rota para remover uma permissão do usuário
router.post('/remove', permissionController.removePermission);

// Rota para listar todas as permissões de um usuário
router.get('/:userId', permissionController.getUserPermissions);

module.exports = router;
