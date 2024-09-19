const cron = require('node-cron');
const Payment = require('../models/Payment');

// Tarefa agendada para renovar assinaturas
cron.schedule('0 0 * * *', async () => {
  console.log('Executando tarefa agendada: Renovação de assinaturas');

  try {
    const expiredPayments = await Payment.find({ paymentStatus: 'Pendente' });

    // Lógica de renovação
    expiredPayments.forEach(async (payment) => {
      // Enviar renovação de pagamento via PicPay
      console.log(`Renovando assinatura do usuário: ${payment.userId}`);
      // Aqui, logicamente renovar o pagamento via API
    });
  } catch (error) {
    console.error('Erro ao renovar assinaturas:', error.message);
  }
});
