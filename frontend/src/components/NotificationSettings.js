import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: false,
    telegramNotifications: true,
  });

  useEffect(() => {
    // Carregar configurações do backend
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/notifications/settings');
        setSettings(response.data);
      } catch (error) {
        console.error('Erro ao carregar configurações:', error.message);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    try {
      await axios.post('/api/notifications/settings', settings);
      alert('Configurações salvas com sucesso');
    } catch (error) {
      console.error('Erro ao salvar configurações:', error.message);
    }
  };

  return (
    <div>
      <h2>Configurações de Notificações</h2>
      <label>
        <input
          type="checkbox"
          checked={settings.emailNotifications}
          onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
        />
        Notificações por E-mail
      </label>
      <label>
        <input
          type="checkbox"
          checked={settings.telegramNotifications}
          onChange={(e) => setSettings({ ...settings, telegramNotifications: e.target.checked })}
        />
        Notificações no Telegram
      </label>
      <button onClick={handleSave}>Salvar Configurações</button>
    </div>
  );
};

export default NotificationSettings;
