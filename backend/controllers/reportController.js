const reportService = require('../services/reportService');

// Controlador para buscar relatórios
exports.getReports = async (req, res) => {
  try {
    const reports = await reportService.generateReports();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: `Erro ao buscar relatórios: ${error.message}` });
  }
};

// Controlador para gerar relatório de usuários
exports.generateUserReport = async (req, res) => {
  try {
    const report = await reportService.generateUserReport();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao gerar relatório de usuários', error: error.message });
  }
};

// Controlador para gerar relatório de tips
exports.generateTipReport = async (req, res) => {
  try {
    const report = await reportService.generateTipReport();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao gerar relatório de tips', error: error.message });
  }
};

// Controlador para gerar relatório de pagamentos
exports.generatePaymentReport = async (req, res) => {
  try {
    const report = await reportService.generatePaymentReport();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao gerar relatório de pagamentos', error: error.message });
  }
};