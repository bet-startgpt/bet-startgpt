const axios = require('axios');

// Função para criar um pagamento no PicPay
exports.createPayment = async (userId, plan, amount) => {
  try {
    const response = await axios.post('https://appws.picpay.com/ecommerce/public/payments', {
      referenceId: userId,
      callbackUrl: process.env.CALLBACK_URL,
      returnUrl: process.env.RETURN_URL,
      value: amount,
      buyer: {
        firstName: 'Nome',
        lastName: 'Sobrenome',
        document: 'CPF',
        email: 'email@usuario.com'
      }
    }, {
      headers: {
        'x-picpay-token': process.env.PICPAY_API_KEY
      }
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar pagamento no PicPay');
  }
};

// Função para verificar o status de um pagamento
exports.verifyPayment = async (transactionId) => {
  try {
    const response = await axios.get(`https://appws.picpay.com/ecommerce/public/payments/${transactionId}/status`, {
      headers: {
        'x-picpay-token': process.env.PICPAY_API_KEY
      }
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao verificar status de pagamento no PicPay');
  }
};
