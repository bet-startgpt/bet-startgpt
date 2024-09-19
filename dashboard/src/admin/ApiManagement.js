import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiManagement = () => {
  const [apiConfigs, setApiConfigs] = useState([]);

  useEffect(() => {
    // Busca as configurações de API
    const fetchApiConfigs = async () => {
      try {
        const response = await axios.get('/api/admin/api-configs');
        setApiConfigs(response.data);
      } catch (error) {
        console.error('Erro ao buscar configurações de API:', error.message);
      }
    };
    fetchApiConfigs();
  }, []);

  const toggleApiStatus = async (apiId, enabled) => {
    try {
      await axios.post(`/api/admin/api-configs/${apiId}`, { enabled: !enabled });
      setApiConfigs(apiConfigs.map(api => 
        api._id === apiId ? { ...api, enabled: !enabled } : api
      ));
    } catch (error) {
      console.error('Erro ao alterar status da API:', error.message);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de APIs</h2>
      <ul>
        {apiConfigs.map(api => (
          <li key={api._id}>
            {api.apiName} - Ativo: {api.enabled ? 'Sim' : 'Não'}
            <button onClick={() => toggleApiStatus(api._id, api.enabled)}>
              {api.enabled ? 'Desativar' : 'Ativar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiManagement;
