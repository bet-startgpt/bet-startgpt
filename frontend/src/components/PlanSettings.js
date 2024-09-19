import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlanSettings = () => {
  const [settings, setSettings] = useState({
    dailyTipsLimit: 5,
    tipsEnabled: true,
  });

  useEffect(() => {
    // Busca as configurações atuais do usuário
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/users/settings');
        setSettings(response.data);
      } catch (error) {
        console.error('Erro ao buscar configurações do plano:', error.message);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    try {
      await axios.post('/api/users/settings', settings);
      alert('Configurações salvas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar configurações do plano:', error.message);
    }
  };

  return (
    <div>
      <h2>Configurações do Plano</h2>
      <label>
        Limite diário de tips:
        <input
          type="number"
          value={settings.dailyTipsLimit}
          onChange={(e) => setSettings({ ...settings, dailyTipsLimit: e.target.value })}
        />
      </label>
      <label>
        Receber tips:
        <input
          type="checkbox"
          checked={settings.tipsEnabled}
          onChange={(e) => setSettings({ ...settings, tipsEnabled: e.target.checked })}
        />
      </label>
      <button onClick={handleSave}>Salvar Configurações</button>
    </div>
  );
};

export default PlanSettings;
