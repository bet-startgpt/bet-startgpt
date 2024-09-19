import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  
  useEffect(() => {
    // Busca o histórico de pagamentos
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/api/payments/history');
        setPayments(response.data);
      } catch (error) {
        console.error('Erro ao buscar histórico de pagamentos:', error.message);
      }
    };
    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Histórico de Pagamentos</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment._id}>
            Plano: {payment.plan} - Valor: {payment.amount} - Status: {payment.paymentStatus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
