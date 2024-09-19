import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientDashboard = () => {
  const [tips, setTips] = useState([]);
  
  useEffect(() => {
    // Busca os sinais (tips) do usuário
    const fetchTips = async () => {
      try {
        const response = await axios.get('/api/tips/all');
        setTips(response.data);
      } catch (error) {
        console.error('Erro ao buscar sinais:', error.message);
      }
    };
    fetchTips();
  }, []);

  return (
    <div>
      <h2>Painel do Cliente</h2>
      <div>
        <h3>Sinais Recentes</h3>
        <ul>
          {tips.map(tip => (
            <li key={tip._id}>
              Jogo: {tip.match} - Previsão: {tip.prediction} - Odds: {tip.odds}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientDashboard;
