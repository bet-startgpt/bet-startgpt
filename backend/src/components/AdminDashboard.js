import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [apiConfigs, setApiConfigs] = useState([]);

  useEffect(() => {
    // Busca usuários e configurações de APIs
    const fetchAdminData = async () => {
      try {
        const userResponse = await axios.get('/api/admin/users');
        const apiResponse = await axios.get('/api/admin/api-configs');
        setUsers(userResponse.data);
        setApiConfigs(apiResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados de admin:', error.message);
      }
    };
    fetchAdminData();
  }, []);

  return (
    <div>
      <h2>Painel do Admin</h2>
      <div>
        <h3>Usuários</h3>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.username} - Plano: {user.plan}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Configurações de APIs</h3>
        <ul>
          {apiConfigs.map(api => (
            <li key={api._id}>{api.apiName} - Ativo: {api.enabled ? 'Sim' : 'Não'}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
