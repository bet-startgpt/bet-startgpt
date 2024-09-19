const Tip = require('../models/Tip');

// Serviço para salvar um novo sinal (tip)
exports.saveTip = async (tipData) => {
  try {
    const newTip = new Tip(tipData);
    await newTip.save();
    return newTip;
  } catch (error) {
    throw new Error('Erro ao salvar tip no banco de dados');
  }
};

// Serviço para buscar tips existentes
exports.getTips = async () => {
  try {
    return await Tip.find();
  } catch (error) {
    throw new Error('Erro ao buscar tips no banco de dados');
  }
};
