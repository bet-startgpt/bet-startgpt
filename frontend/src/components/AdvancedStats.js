import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdvancedStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/stats/advanced');
        setStats(response.data);
      } catch (error) {
        console.error('Erro ao buscar estatísticas avançadas:', error.message);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>Estatísticas Avançadas</h2>
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            {stat.team} - {stat.statistic} (Odds: {stat.odds})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvancedStats;
