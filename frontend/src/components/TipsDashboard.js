import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TipsDashboard = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Busca os tips do backend
    const fetchTips = async () => {
      try {
        const response = await axios.get('/api/tips');
        setTips(response.data);
      } catch (error) {
        console.error('Erro ao buscar tips:', error.message);
      }
    };
    fetchTips();
  }, []);

  return (
    <div>
      <h2>Dashboard de Tips</h2>
      <ul>
        {tips.map(tip => (
          <li key={tip._id}>
            {tip.match} - {tip.prediction} (Odds: {tip.odds})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TipsDashboard;
