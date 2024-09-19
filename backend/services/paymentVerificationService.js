const axios = require('axios');
const Payment = require('../models/Payment');

// Serviço para verificar o status de pagamentos via PicPay
exports.verifyPaymentStatus = async (paymentId) => {
  try {
    const response = await axios.get(`https://api.picpay.com/v1/payments/${paymentId}/status`, {
      headers: { 'x-picpay-token': process.env.PICPAY_API_TOKEN }
    });

    if (response.data.status === 'paid') {
      await Payment.updateOne({ paymentId }, { status: 'paid' });
      return 'Pagamento confirmado';
    } else {
      return 'Pagamento pendente ou não processado';
    }
  } catch (error) {
    throw new Error(`Erro ao verificar pagamento: ${error.message}`);
  }
};
