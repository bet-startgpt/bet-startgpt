const ApiLimit = require('../models/ApiLimit');

// Controlador para consultar o limite de uma API
exports.getApiLimit = async (req, res) => {
  const { apiName } = req.params;

  try {
    const apiLimit = await ApiLimit.findOne({ apiName });
    if (!apiLimit) {
      return res.status(404).json({ message: `Limite não configurado para ${apiName}` });
    }

    res.status(200).json(apiLimit);
  } catch (error) {
    res.status(500).json({ message: `Erro ao buscar limite da API: ${error.message}` });
  }
};

// Controlador para ajustar o limite de uma API
exports.setApiLimit = async (req, res) => {
  const { apiName, limit } = req.body;

  try {
    const apiLimit = await ApiLimit.findOneAndUpdate(
      { apiName },
      { limit, used: 0 }, // Reseta o uso ao ajustar o limite
      { new: true, upsert: true }
    );

    res.status(200).json(apiLimit);
  } catch (error) {
    res.status(500).json({ message: `Erro ao definir limite da API: ${error.message}` });
  }
};
