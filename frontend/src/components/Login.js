import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      console.error('Erro ao efetuar login:', error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <label>Email</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      
      <label>Senha</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
