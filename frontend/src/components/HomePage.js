import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo ao Sistema de Sinais Desportivos</h1>
      <p>Obtenha os melhores sinais para apostas esportivas com base em análises detalhadas!</p>
      <Link to="/pricing">
        <button>Veja os Planos</button>
      </Link>
    </div>
  );
};

export default HomePage;
