const openaiService = require('../services/openaiService');

// Controlador para gerar uma resposta via ChatGPT
exports.askChatGPT = async (req, res) => {
  const { question } = req.body;

  try {
    const response = await openaiService.generateResponse(question);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ message: `Erro ao gerar resposta: ${error.message}` });
  }
};
