const cron = require('node-cron');
const Payment = require('../models/Payment');

// Tarefa agendada para verificar pagamentos pendentes diariamente
cron.schedule('0 0 * * *', async () => {
  console.log('Executando tarefa agendada: Verificar pagamentos pendentes');

  try {
    const pendingPayments = await Payment.find({ paymentStatus: 'Pendente' });

    // Lógica para enviar lembretes ou atualizar status de pagamento
    pendingPayments.forEach(payment => {
      console.log(`Pagamento pendente encontrado: ${payment.transactionId}`);
      // Aqui, enviar notificação ao usuário ou processar renovação
    });
  } catch (error) {
    console.error('Erro ao verificar pagamentos pendentes:', error.message);
  }
});
