const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

// Rota para buscar todos os planos disponíveis
router.get('/all', planController.getAllPlans);

// Rota para atualizar o plano de um usuário
router.post('/update', planController.updateUserPlan);

// Rota para criar um novo plano
router.post('/create', planController.createPlan);


// Rota para atualizar um plano existente
router.put('/update/:planId', planController.updatePlan);

// Rota para listar todos os planos
router.get('/', planController.getPlans);

// Rota para adicionar um novo plano
router.post('/', planController.createPlan);

// Rota para excluir um plano
router.delete('/:planId', planController.deletePlan);

module.exports = router;
