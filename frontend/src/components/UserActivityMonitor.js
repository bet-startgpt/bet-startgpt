import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserActivityMonitor = ({ userId }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`/api/user-activities/${userId}`);
        setActivities(response.data);
      } catch (error) {
        console.error('Erro ao buscar atividades do usuário:', error.message);
      }
    };
    fetchActivities();
  }, [userId]);

  return (
    <div>
      <h2>Atividades Recentes</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity._id}>{activity.description} - {new Date(activity.timestamp).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivityMonitor;
