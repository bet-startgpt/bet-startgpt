const Plan = require('../models/Plan');
const planService = require('../services/planService');

// Controlador para criar um novo plano
exports.createPlan = async (req, res) => {
  const { name, price, tipsLimit } = req.body;

  try {
    const newPlan = await planService.createPlan(name, price, tipsLimit);
    res.status(201).json({ message: 'Plano criado com sucesso', plan: newPlan });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar plano', error: error.message });
  }
};

// Controlador para listar todos os planos
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await planService.getAllPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar os planos', error: error.message });
  }
};

// Controlador para atualizar um plano
exports.updatePlan = async (req, res) => {
  const { planId } = req.params;
  const { name, price, tipsLimit } = req.body;

  try {
    const updatedPlan = await planService.updatePlan(planId, name, price, tipsLimit);
    res.status(200).json({ message: 'Plano atualizado com sucesso', plan: updatedPlan });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar plano', error: error.message });
  }
};

// Controlador para listar todos os planos
exports.getPlans = async (req, res) => {
  try {
    const plans = await planService.getAllPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar planos', error: error.message });
  }
};

// Controlador para adicionar um novo plano
exports.createPlan = async (req, res) => {
  const { name, price, features } = req.body;

  try {
    const newPlan = await planService.createPlan({ name, price, features });
    res.status(201).json({ message: 'Plano criado com sucesso', plan: newPlan });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar plano', error: error.message });
  }
};

// Controlador para excluir um plano
exports.deletePlan = async (req, res) => {
  const { planId } = req.params;

  try {
    await planService.deletePlan(planId);
    res.status(200).json({ message: 'Plano excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir plano', error: error.message });
  }
};