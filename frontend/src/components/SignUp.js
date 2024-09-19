import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const plan = new URLSearchParams(window.location.search).get('plan');
      await axios.post('/api/users/register', { username, email, password, plan });
      history.push('/login');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registrar-se</h2>
      <label>Nome de Usuário</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
      
      <label>Email</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      
      <label>Senha</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      
      <button type="submit">Registrar</button>
    </form>
  );
};

export default SignUp;
