import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [paymentUrl, setPaymentUrl] = useState('');

  useEffect(() => {
    const createPayment = async () => {
      const plan = new URLSearchParams(window.location.search).get('plan');
      const amount = plan === 'vip' ? 69.90 : 39.90;

      try {
        const response = await axios.post('/api/payments/create', { plan, amount });
        setPaymentUrl(response.data.paymentLink);
      } catch (error) {
        console.error('Erro ao criar pagamento:', error.message);
      }
    };

    createPayment();
  }, []);

  return (
    <div>
      <h2>Finalizar Pagamento</h2>
      {paymentUrl && <a href={paymentUrl}>Pagar Agora</a>}
    </div>
  );
};

export default Checkout;
