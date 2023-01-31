import React from 'react';
import './Header.css';
import img from './img.png';

export default function Header() {
  return (
    <div class="container">
      <img src={img} className="img" alt="ícone de formulário" />
      <h1 className="header">
        Planilha de <br />
        Despesas
      </h1>
    </div>
  );
}
