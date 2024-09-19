const axios = require('axios');

// Serviço para criar um pagamento no PicPay
exports.createPayment = async (paymentData) => {
  const { userId, referenceId, value, buyer } = paymentData;

  try {
    const response = await axios.post('https://appws.picpay.com/ecommerce/public/payments', {
      referenceId,
      callbackUrl: `${process.env.CALLBACK_URL}/payments/picpay/callback`,
      returnUrl: `${process.env.FRONTEND_URL}/payment-success`,
      value,
      buyer: {
        firstName: buyer.firstName,
        lastName: buyer.lastName,
        document: buyer.document,
        email: buyer.email,
        phone: buyer.phone
      }
    }, {
      headers: {
        'x-picpay-token': process.env.PICPAY_API_KEY
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(`Erro ao criar pagamento no PicPay: ${error.response.data.message}`);
  }
};

// Serviço para verificar o status de um pagamento no PicPay
exports.checkPaymentStatus = async (referenceId) => {
  try {
    const response = await axios.get(`https://appws.picpay.com/ecommerce/public/payments/${referenceId}/status`, {
      headers: {
        'x-picpay-token': process.env.PICPAY_API_KEY
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(`Erro ao verificar status do pagamento: ${error.response.data.message}`);
  }
};
