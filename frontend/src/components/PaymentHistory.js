import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Busca o histórico de pagamentos do backend
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
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Plano</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment._id}>
              <td>{new Date(payment.date).toLocaleDateString()}</td>
              <td>{payment.plan}</td>
              <td>R${payment.amount.toFixed(2)}</td>
              <td>{payment.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
