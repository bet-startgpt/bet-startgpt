import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/api/reports');
        setReportData(response.data);
      } catch (error) {
        console.error('Erro ao buscar relatórios:', error.message);
      }
    };
    fetchReports();
  }, []);

  if (!reportData) return <div>Carregando relatórios...</div>;

  return (
    <div>
      <h2>Relatórios de Performance e Uso de APIs</h2>
      <div>
        <h3>Performance dos Sinais</h3>
        <p>Total de Sinais: {reportData.performanceReport.totalTips}</p>
        <p>Média de Odds: {reportData.performanceReport.avgOdds}</p>
      </div>
      <div>
        <h3>Uso de APIs</h3>
        <ul>
          {reportData.apiUsageReport.map(api => (
            <li key={api._id}>{api._id}: {api.totalCalls} chamadas</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reports;
