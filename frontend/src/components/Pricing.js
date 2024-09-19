import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div>
      <h2>Escolha o seu Plano</h2>
      <div>
        <h3>Plano Básico</h3>
        <p>R$39,90/mês - Acesso às funcionalidades básicas</p>
        <Link to="/signup?plan=basico">
          <button>Assinar Plano Básico</button>
        </Link>
      </div>
      <div>
        <h3>Plano VIP</h3>
        <p>R$69,90/mês - Acesso a funcionalidades avançadas e sinais exclusivos</p>
        <Link to="/signup?plan=vip">
          <button>Assinar Plano VIP</button>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
