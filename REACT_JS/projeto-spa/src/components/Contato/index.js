import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Contato() {
  return (
    <div className="home" id="contato">
      <h1>Entre em contato</h1>
      <h2>Telefone: (48) 99601-8809</h2>
      <h3>Rua: Alguma rua, endereço</h3>
      <Link smooth to="#home" style={{color: '#ffffff'}}>Ir para Home</Link>
      <br/>
      <Link smooth to="#sobre" style={{color: '#ffffff'}}>Ir para Sobre</Link>
    </div>
  );
}

export default Contato;
