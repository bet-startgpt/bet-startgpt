// /backend/controllers/predictionController.js

const openaiService = require('../services/openaiService');

// Controlador para gerar predições com GPT-4 Mini
exports.getPrediction = async (req, res) => {
  const { prompt } = req.body;

  try {
    const prediction = await openaiService.generatePrediction(prompt);
    res.status(200).json({ prediction });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao gerar predição', error: error.message });
  }
};
