const footyStatsService = require('../services/footyStatsService');
const cornerStatsService = require('../services/cornerStatsService');

// Controlador para buscar estatísticas de times
exports.getTeamStats = async (req, res) => {
  try {
    const teamStats = await footyStatsService.fetchFootyStats();
    res.json(teamStats);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar estatísticas de times', error });
  }
};

// Controlador para buscar estatísticas de escanteios
exports.getCornerStats = async (req, res) => {
  try {
    const cornerStats = await cornerStatsService.fetchCornerStats();
    res.json(cornerStats);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar estatísticas de escanteios', error });
  }
};
