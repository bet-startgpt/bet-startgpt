const Plan = require('../models/Plan');

// Controlador para listar todos os planos
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar planos', error });
  }
};

// Controlador para criar um novo plano
exports.createPlan = async (req, res) => {
  const { name, price, tipsLimit } = req.body;

  try {
    const newPlan = new Plan({ name, price, tipsLimit });
    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar plano', error });
  }
};

// Controlador para atualizar um plano existente
exports.updatePlan = async (req, res) => {
  const { planId } = req.params;
  const updatedData = req.body;

  try {
    const updatedPlan = await Plan.findByIdAndUpdate(planId, updatedData, { new: true });
    if (!updatedPlan) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }
    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar plano', error });
  }
};

// Controlador para deletar um plano
exports.deletePlan = async (req, res) => {
  const { planId } = req.params;

  try {
    const deletedPlan = await Plan.findByIdAndDelete(planId);
    if (!deletedPlan) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }
    res.status(200).json({ message: 'Plano deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar plano', error });
  }
};
