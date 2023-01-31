import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    // if que ve se tem alguma despesa no ano selecionado
    return (
      <h2 className="expenses-list__fallback">Nenhuma despesa encontrada.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
