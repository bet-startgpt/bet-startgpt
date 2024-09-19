import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiUsageMonitor = () => {
  const [apiUsage, setApiUsage] = useState([]);

  useEffect(() => {
    const fetchApiUsage = async () => {
      try {
        const response = await axios.get('/api/api-limits');
        setApiUsage(response.data);
      } catch (error) {
        console.error('Erro ao carregar uso de APIs:', error.message);
      }
    };
    fetchApiUsage();
  }, []);

  return (
    <div>
      <h2>Monitoramento de Uso de APIs</h2>
      <ul>
        {apiUsage.map(api => (
          <li key={api.apiName}>
            {api.apiName}: {api.requests} / {api.limit} (Reset em: {new Date(api.resetDate).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiUsageMonitor;
