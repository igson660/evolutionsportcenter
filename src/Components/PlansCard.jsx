import React from 'react';
import '../styles/programs.css';

export default function Plans({ plan }) {
  return(
    <div className="main-programs">
      <h2>Plano {plan.name}</h2>
      <h3>Valor R$ {plan.value},00</h3>
    </div>
  );
}