import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatsGraph from './StatsGraph';

const ClientDashboard = () => {
  const [userTips, setUserTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca os tips personalizados para o cliente
    const fetchUserTips = async () => {
      try {
        const response = await axios.get('/api/tips/user');
        setUserTips(response.data);
      } catch (error) {
        console.error('Erro ao buscar tips do usuário:', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserTips();
  }, []);

  return (
    <div>
      <h2>Dashboard do Cliente</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <StatsGraph />
          <h3>Tips Personalizadas</h3>
          <ul>
            {userTips.map((tip, index) => (
              <li key={index}>
                {tip.match} - {tip.prediction} - Odds: {tip.odds}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ClientDashboard;
