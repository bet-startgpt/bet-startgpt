const footyStatsService = require('../services/footyStatsService');
const highlightlyService = require('../services/highlightlyService');
const oddsService = require('../services/oddsService');

// Controlador para buscar dados da FootyStats API
exports.getFootyStatsData = async (req, res) => {
  try {
    const data = await footyStatsService.fetchFootyStats();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para buscar dados da Highlightly API
exports.getHighlightlyData = async (req, res) => {
  try {
    const data = await highlightlyService.fetchHighlightlyData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para buscar dados da Odds API
exports.getOddsData = async (req, res) => {
  try {
    const data = await oddsService.fetchOddsData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
