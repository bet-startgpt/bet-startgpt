import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriptionManagement = ({ userId }) => {
  const [subscription, setSubscription] = useState(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Carregar assinatura do usuário
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await axios.get(`/api/subscription/status/${userId}`);
        setSubscription(response.data.subscription);
        setIsExpired(response.data.isExpired);
      } catch (error) {
        console.error('Erro ao carregar assinatura:', error.message);
      }
    };
    fetchSubscriptionStatus();
  }, [userId]);

  const handleRenew = async () => {
    try {
      await axios.post('/api/subscriptions/renew');
      alert('Assinatura renovada com sucesso');
    } catch (error) {
      console.error('Erro ao renovar assinatura:', error.message);
    }
  };

  const handleCancel = async () => {
    try {
      await axios.post('/api/subscriptions/cancel');
      alert('Assinatura cancelada com sucesso');
    } catch (error) {
      console.error('Erro ao cancelar assinatura:', error.message);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de Assinaturas</h2>
      {subscription ? (
        <div>
          <p>Plano: {subscription.plan}</p>
          <p>Status do pagamento: {subscription.paymentStatus}</p>
          <p>Expira em: {new Date(subscription.endDate).toLocaleDateString()}</p>
          {isExpired && <p style={{ color: 'red' }}>Assinatura expirada</p>}
          <button onClick={handleRenew}>Renovar Assinatura</button>
          <button onClick={handleCancel}>Cancelar Assinatura</button>
        </div>
      ) : (
        <p>Carregando informações da assinatura...</p>
      )}
    </div>
  );
};

export default SubscriptionManagement;
