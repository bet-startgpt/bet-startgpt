const Payment = require('../models/Payment');
const paymentService = require('../services/paymentService');

// Cria um novo pedido de pagamento no PicPay
exports.createPayment = async (req, res) => {
  try {
    const { userId, plan, amount } = req.body;

    // Cria o pagamento no PicPay
    const picpayResponse = await paymentService.createPayment(userId, plan, amount);

    // Cria o registro de pagamento no banco de dados
    const newPayment = new Payment({
      userId,
      plan,
      amount,
      paymentStatus: 'Pendente',
      transactionId: picpayResponse.referenceId
    });

    await newPayment.save();

    res.status(201).json({
      message: 'Pagamento criado com sucesso',
      paymentLink: picpayResponse.paymentUrl,
      transactionId: picpayResponse.referenceId
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pagamento', error });
  }
};

// Confirma o pagamento após a notificação do PicPay
exports.confirmPayment = async (req, res) => {
  try {
    const { referenceId } = req.body;

    // Verifica o pagamento no PicPay
    const paymentStatus = await paymentService.checkPayment(referenceId);

    // Atualiza o status do pagamento no banco de dados
    await Payment.findOneAndUpdate(
      { transactionId: referenceId },
      { paymentStatus: paymentStatus.status }
    );

    res.status(200).json({ message: 'Pagamento confirmado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao confirmar pagamento', error });
  }
};
