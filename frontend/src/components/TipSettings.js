import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TipSettings = ({ userId }) => {
  const [config, setConfig] = useState({ tipsPerDay: 5, preferredTeams: [], receiveNotifications: true });

  useEffect(() => {
    // Busca as configurações do usuário
    const fetchConfig = async () => {
      try {
        const response = await axios.get(`/api/user-config/${userId}`);
        setConfig(response.data);
      } catch (error) {
        console.error('Erro ao buscar configurações:', error.message);
      }
    };
    fetchConfig();
  }, [userId]);

  const handleUpdate = async () => {
    try {
      await axios.post('/api/user-config/update', { userId, ...config });
      alert('Configurações atualizadas com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar configurações:', error.message);
    }
  };

  return (
    <div>
      <h2>Configurações de Tips</h2>
      <div>
        <label>Quantidade de Tips por Dia:</label>
        <input
          type="number"
          value={config.tipsPerDay}
          onChange={e => setConfig({ ...config, tipsPerDay: e.target.value })}
        />
      </div>
      <div>
        <label>Times Preferidos:</label>
        <input
          type="text"
          value={config.preferredTeams.join(', ')}
          onChange={e => setConfig({ ...config, preferredTeams: e.target.value.split(',') })}
        />
      </div>
      <div>
        <label>Receber Notificações:</label>
        <input
          type="checkbox"
          checked={config.receiveNotifications}
          onChange={e => setConfig({ ...config, receiveNotifications: e.target.checked })}
        />
      </div>
      <button onClick={handleUpdate}>Salvar Configurações</button>
    </div>
  );
};

export default TipSettings;
