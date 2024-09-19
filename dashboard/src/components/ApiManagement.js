import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiManagement = () => {
  const [apiConfigs, setApiConfigs] = useState([]);

  useEffect(() => {
    // Busca a configuração atual das APIs
    const fetchApiConfigs = async () => {
      try {
        const response = await axios.get('/api/admin/api-config');
        setApiConfigs(response.data);
      } catch (error) {
        console.error('Erro ao buscar configurações de API:', error.message);
      }
    };
    fetchApiConfigs();
  }, []);

  const handleApiToggle = async (apiName) => {
    try {
      await axios.post(`/api/admin/api-config/${apiName}/toggle`);
      // Atualiza as configurações
      const updatedConfigs = apiConfigs.map(api => 
        api.apiName === apiName ? { ...api, enabled: !api.enabled } : api
      );
      setApiConfigs(updatedConfigs);
    } catch (error) {
      console.error('Erro ao alternar API:', error.message);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de APIs</h2>
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>Ativada</th>
            <th>Chave</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {apiConfigs.map(api => (
            <tr key={api.apiName}>
              <td>{api.apiName}</td>
              <td>{api.enabled ? 'Sim' : 'Não'}</td>
              <td>{api.apiKey}</td>
              <td>
                <button onClick={() => handleApiToggle(api.apiName)}>
                  {api.enabled ? 'Desativar' : 'Ativar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiManagement;
