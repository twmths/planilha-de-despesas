import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && ( // se isEditing for falso vai aparecer esse botão VVV
        <button onClick={startEditingHandler}>Adicionar Nova Despesa 💫</button>
      )}
      {isEditing && ( // se isEditing for TRUE vai aparecer esse form VVV
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
