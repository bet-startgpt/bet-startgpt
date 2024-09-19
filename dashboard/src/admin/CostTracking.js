import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CostTracking = () => {
  const [apiUsage, setApiUsage] = useState([]);

  useEffect(() => {
    // Busca o uso atual das APIs
    const fetchApiUsage = async () => {
      try {
        const response = await axios.get('/api/admin/api-usage');
        setApiUsage(response.data);
      } catch (error) {
        console.error('Erro ao buscar uso das APIs:', error.message);
      }
    };
    fetchApiUsage();
  }, []);

  return (
    <div>
      <h2>Monitoramento de Uso de APIs</h2>
      <ul>
        {apiUsage.map(api => (
          <li key={api._id}>
            {api.apiName} - Uso: {api.usage}/{api.limit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CostTracking;
