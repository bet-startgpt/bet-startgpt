const User = require('../models/User');
const Plan = require('../models/Plan');

// Serviço para atualizar o plano de um usuário
exports.updateUserPlan = async (userId, planId) => {
  try {
    const plan = await Plan.findById(planId);
    if (!plan) throw new Error('Plano não encontrado');

    await User.updateOne({ _id: userId }, { plan: planId });
    return { message: 'Plano atualizado com sucesso', plan };
  } catch (error) {
    throw new Error(`Erro ao atualizar plano: ${error.message}`);
  }
};

// Serviço para buscar planos disponíveis
exports.getAvailablePlans = async () => {
  try {
    return await Plan.find({});
  } catch (error) {
    throw new Error(`Erro ao buscar planos: ${error.message}`);
  }
};

// Serviço para criar um novo plano
exports.createPlan = async (name, price, tipsLimit) => {
  const newPlan = new Plan({ name, price, tipsLimit });
  await newPlan.save();
  return newPlan;
};

// Serviço para listar todos os planos
exports.getAllPlans = async () => {
  return await Plan.find();
};

// Serviço para atualizar um plano existente
exports.updatePlan = async (planId, name, price, tipsLimit) => {
  return await Plan.findByIdAndUpdate(planId, { name, price, tipsLimit }, { new: true });
};

// Serviço para excluir um plano
exports.deletePlan = async (planId) => {
  return await Plan.findByIdAndDelete(planId);
};