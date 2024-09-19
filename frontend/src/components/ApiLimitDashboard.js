import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiLimitDashboard = () => {
  const [apiLimits, setApiLimits] = useState([]);

  useEffect(() => {
    const fetchApiLimits = async () => {
      try {
        const response = await axios.get('/api/limits/all');
        setApiLimits(response.data);
      } catch (error) {
        console.error('Erro ao buscar limites das APIs:', error.message);
      }
    };
    fetchApiLimits();
  }, []);

  return (
    <div>
      <h2>Limites de Uso das APIs</h2>
      <ul>
        {apiLimits.map(limit => (
          <li key={limit._id}>
            <h3>{limit.apiName}</h3>
            <p>Limite: {limit.limit}</p>
            <p>Usado: {limit.used}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiLimitDashboard;
