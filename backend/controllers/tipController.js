const Tip = require('../models/Tip');

// Cria um novo sinal (tip)
exports.createTip = async (req, res) => {
  const { match, league, prediction, odds, advancedOdds, tacticalAnalysis, recentPerformance } = req.body;

  try {
    const newTip = new Tip({
      match,
      league,
      prediction,
      odds,
      advancedOdds,
      tacticalAnalysis,
      recentPerformance
    });

    await newTip.save();
    res.status(201).json({ message: 'Sinal criado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o sinal', error });
  }
};

// Lista todos os sinais
exports.getAllTips = async (req, res) => {
  try {
    const tips = await Tip.find({});
    res.json(tips);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar os sinais', error });
  }
};

// Envia um sinal para um usuário específico
exports.sendTipToUser = async (req, res) => {
  const { userId, tipId } = req.body;

  try {
    // Buscando o sinal
    const tip = await Tip.findById(tipId);
    if (!tip) {
      return res.status(404).json({ message: 'Sinal não encontrado' });
    }

    // Aqui você pode adicionar a lógica para enviar o sinal ao usuário (ex.: via bot Telegram)
    res.json({ message: 'Sinal enviado com sucesso', tip });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar o sinal', error });
  }
};
