import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentNotification = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`/api/payment-notifications/${userId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Erro ao buscar notificações:', error.message);
      }
    };
    fetchNotifications();
  }, [userId]);

  return (
    <div>
      <h2>Notificações de Pagamento</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification._id}>{notification.message} - {new Date(notification.sentAt).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentNotification;
