const paymentVerificationService = require('../services/paymentVerificationService');

// Controlador para verificar o status de um pagamento
exports.verifyPayment = async (req, res) => {
  const { paymentId } = req.params;

  try {
    const status = await paymentVerificationService.verifyPaymentStatus(paymentId);
    res.status(200).json({ message: status });
  } catch (error) {
    res.status(500).json({ message: `Erro ao verificar pagamento: ${error.message}` });
  }
};
