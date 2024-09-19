import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const StatsGraph = () => {
  const [statsData, setStatsData] = useState({});

  useEffect(() => {
    // Busca os dados de estatísticas do backend
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/stats');
        setStatsData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados de estatísticas:', error.message);
      }
    };
    fetchStats();
  }, []);

  const data = {
    labels: statsData.dates || [],
    datasets: [
      {
        label: 'Gols Marcados',
        data: statsData.goals || [],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  };

  return (
    <div>
      <h2>Gráfico de Estatísticas</h2>
      <Line data={data} />
    </div>
  );
};

export default StatsGraph;
