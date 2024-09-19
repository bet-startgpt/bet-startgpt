import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiConfigSettings = () => {
  const [apis, setApis] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const fetchApis = async () => {
      try {
        const response = await axios.get('/api/api-config/list');
        setApis(response.data);
      } catch (error) {
        console.error('Erro ao buscar configuração de APIs:', error.message);
      }
    };
    fetchApis();
  }, []);

  const updateApiKey = async (apiName) => {
    try {
      await axios.post('/api/api-config/update-key', { apiName, apiKey });
      alert('Chave da API atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar chave da API:', error.message);
    }
  };

  const toggleApiStatus = async (apiName) => {
    try {
      await axios.post('/api/api-config/toggle-status', { apiName, enabled });
      alert(`API ${enabled ? 'ativada' : 'desativada'} com sucesso!`);
    } catch (error) {
      console.error('Erro ao alterar status da API:', error.message);
    }
  };

  return (
    <div>
      <h2>Configuração de APIs</h2>
      <ul>
        {apis.map(api => (
          <li key={api.apiName}>
            <strong>{api.apiName}</strong>
            <input
              type="text"
              placeholder="Nova chave"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <button onClick={() => updateApiKey(api.apiName)}>Atualizar Chave</button>
            <button onClick={() => toggleApiStatus(api.apiName)}>
              {api.enabled ? 'Desativar' : 'Ativar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiConfigSettings;
