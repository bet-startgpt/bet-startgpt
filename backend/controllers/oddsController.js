const oddsService = require('../services/oddsService');

// Controlador para buscar odds de apostas
exports.getOdds = async (req, res) => {
  try {
    const odds = await oddsService.fetchOdds();
    res.status(200).json(odds);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar odds de apostas', error: error.message });
  }
};
