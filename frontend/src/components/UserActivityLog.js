import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserActivityLog = ({ userId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`/api/user-activity/${userId}`);
        setLogs(response.data);
      } catch (error) {
        console.error('Erro ao buscar logs de atividades:', error.message);
      }
    };
    fetchLogs();
  }, [userId]);

  return (
    <div>
      <h2>Atividade do Usuário</h2>
      <ul>
        {logs.map(log => (
          <li key={log._id}>
            {log.activity} - {new Date(log.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivityLog;
