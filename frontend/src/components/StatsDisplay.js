import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatsDisplay = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/stats/team');
        setStats(response.data);
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error.message);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>Estatísticas dos Times</h2>
      <ul>
        {stats.map((stat) => (
          <li key={stat.team}>
            {stat.team} - {stat.statistic} (Odds: {stat.odds})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsDisplay;
