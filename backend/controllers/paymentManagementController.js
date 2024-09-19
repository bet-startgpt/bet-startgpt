const Payment = require('../models/Payment');

// Controlador para criar um novo pagamento
exports.createPayment = async (req, res) => {
  const { userId, plan, amount } = req.body;

  try {
    const newPayment = new Payment({ userId, plan, amount, paymentStatus: 'Pendente' });
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pagamento', error });
  }
};

// Controlador para verificar o status de um pagamento
exports.getPaymentStatus = async (req, res) => {
  const { paymentId } = req.params;

  try {
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ message: 'Pagamento não encontrado' });
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar status do pagamento', error });
  }
};
