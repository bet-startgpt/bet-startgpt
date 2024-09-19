// Middleware para validação de dados
exports.validateTipData = (req, res, next) => {
  const { match, prediction, odds } = req.body;

  if (!match || !prediction || !odds) {
    return res.status(400).json({ message: 'Dados inválidos. Certifique-se de fornecer match, prediction e odds.' });
  }

  if (typeof odds !== 'number' || odds <= 0) {
    return res.status(400).json({ message: 'Odds devem ser um número positivo.' });
  }

  next();
};
