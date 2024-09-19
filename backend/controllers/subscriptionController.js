const Subscription = require('../models/Subscription');
const paymentService = require('../services/paymentService');

// Controlador para criar uma nova assinatura
exports.createSubscription = async (req, res) => {
  const { userId, plan, buyer } = req.body;
  const value = plan === 'VIP' ? 69.90 : 39.90;  // Definir valor baseado no plano
  const referenceId = `${userId}-${Date.now()}`;  // Referência única para pagamento

  try {
    // Cria o pagamento via serviço de pagamento
    const payment = await paymentService.createPayment({ referenceId, value, buyer });

    // Cria uma nova assinatura com data de expiração de 30 dias
    const newSubscription = new Subscription({
      userId,
      plan,
      paymentReference: referenceId,
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)  // Adiciona 30 dias
    });

    // Salva a assinatura no banco de dados
    await newSubscription.save();
    res.status(201).json({ message: 'Assinatura criada com sucesso', paymentUrl: payment.paymentUrl });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar assinatura', error: error.message });
  }
};

// Controlador para verificar o status da assinatura
exports.checkSubscriptionStatus = async (req, res) => {
  const { userId } = req.params;

  try {
    // Busca a assinatura no banco de dados
    const subscription = await Subscription.findOne({ userId });
    if (!subscription) {
      return res.status(404).json({ message: 'Assinatura não encontrada' });
    }

    // Verifica o status do pagamento via serviço de pagamento
    const paymentStatus = await paymentService.checkPaymentStatus(subscription.paymentReference);
    
    // Atualiza o status de pagamento na assinatura
    subscription.paymentStatus = paymentStatus.status;
    await subscription.save();

    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao verificar assinatura', error: error.message });
  }
};

// Controlador para cancelar uma assinatura
exports.cancelSubscription = async (req, res) => {
  const { userId } = req.params;

  try {
    const subscription = await Subscription.findOneAndUpdate(
      { userId },
      { canceled: true }
    );
    res.status(200).json({ message: 'Assinatura cancelada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cancelar assinatura', error: error.message });
  }
};