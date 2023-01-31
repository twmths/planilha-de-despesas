import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">R$ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

/*
// a component in REACT is just a JS function
// os componente só funcionam com UMA div, se tiver mais tem qcolocar elas em um ()
// components can't use data stored in other components, instead use PROPS

// vc pegou as props pra essa funçao da cont expenses no App.js

// tip best practices: deixar o codigo js fora do retorno e dentro dele usar as variaveis q carregam o código

// geralmente usar xHandler no final de variaveis q geralmente usaria addEventListener

const ExpenseItem = function (props) {
  // react hooks SÓ pode ser acionados dentro de component functions, NAO pode ser dentro de nested functions, nem fora da parent function e nem no return
  const [title, setTitle] = useState(props.title); //this is a react hook
  // useState SEMPRE vai retornar um array cujo primeiro elmnto eh o current state value, e o segundo eh uma funçao q vai atualizar esse value
  const clickHandler = () => {
    setTitle('TESTEEEEEEE'); // isso faz a variavel recebr um novo elemento e tb atualiza o componene q ela foi chamada
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
*/
