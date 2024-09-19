const express = require('express');
const router = express.Router();
const planManagementController = require('../controllers/planManagementController');

// Rota para listar todos os planos
router.get('/', planManagementController.getAllPlans);

// Rota para criar um novo plano
router.post('/', planManagementController.createPlan);

// Rota para atualizar um plano existente
router.put('/:planId', planManagementController.updatePlan);

// Rota para deletar um plano
router.delete('/:planId', planManagementController.deletePlan);

module.exports = router;
