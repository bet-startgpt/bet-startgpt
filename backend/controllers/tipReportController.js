const tipService = require('../services/tipService');

// Controlador para gerar relatórios de sinais (tips)
exports.generateTipReport = async (req, res) => {
  try {
    const report = await tipService.generateTipReport();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: `Erro ao gerar relatório de sinais: ${error.message}` });
  }
};
