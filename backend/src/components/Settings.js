import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = () => {
  const [dailyTipsLimit, setDailyTipsLimit] = useState(5);
  const [tipsEnabled, setTipsEnabled] = useState(true);

  useEffect(() => {
    // Busca as configurações atuais do usuário
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/user/settings');
        setDailyTipsLimit(response.data.dailyTipsLimit);
        setTipsEnabled(response.data.tipsEnabled);
      } catch (error) {
        console.error('Erro ao buscar configurações:', error.message);
      }
    };
    fetchSettings();
  }, []);

  const handleSaveSettings = async () => {
    try {
      await axios.post('/api/user/settings', { dailyTipsLimit, tipsEnabled });
      alert('Configurações salvas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar configurações:', error.message);
    }
  };

  return (
    <div>
      <h2>Configurações de Tips</h2>
      <div>
        <label>Limite diário de sinais:</label>
        <input
          type="number"
          value={dailyTipsLimit}
          onChange={e => setDailyTipsLimit(e.target.value)}
        />
      </div>
      <div>
        <label>Habilitar notificações de sinais:</label>
        <input
          type="checkbox"
          checked={tipsEnabled}
          onChange={e => setTipsEnabled(e.target.checked)}
        />
      </div>
      <button onClick={handleSaveSettings}>Salvar Configurações</button>
    </div>
  );
};

export default Settings;
