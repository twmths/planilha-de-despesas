import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import './App.css';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Fisioterapia',
    amount: 149.99,
    date: new Date(2023, 3, 2),
  },
  {
    id: 'e2',
    title: 'Papel Higiênico',
    amount: 12.0,
    date: new Date(2023, 2, 14),
  },
  {
    id: 'e3',
    title: 'Reparos no PC',
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: 'e4',
    title: 'Seguro do Carro',
    amount: 294.99,
    date: new Date(2023, 1, 28),
  },
  {
    id: 'e5',
    title: 'Mesa Nova',
    amount: 499.99,
    date: new Date(2022, 12, 12),
  },
  {
    id: 'e6',
    title: 'Supermercado',
    amount: 250,
    date: new Date(2022, 11, 10),
  },
  {
    id: 'e7',
    title: 'Conserto do Guardarroupa',
    amount: 412.99,
    date: new Date(2022, 10, 25),
  },
  {
    id: 'e8',
    title: 'Tênis Nike',
    amount: 599.99,
    date: new Date(2022, 10, 13),
  },
  {
    id: 'e9',
    title: 'Lente de Óculos',
    amount: 99.99,
    date: new Date(2022, 9, 28),
  },
  {
    id: 'e10',
    title: 'Aniversário',
    amount: 250,
    date: new Date(2022, 7, 25),
  },
  {
    id: 'e11',
    title: 'Presente de Casamento',
    amount: 399.99,
    date: new Date(2022, 3, 14),
  },
  {
    id: 'e12',
    title: 'Kit de Ferramentas',
    amount: 199.99,
    date: new Date(2021, 4, 11),
  },
  {
    id: 'e13',
    title: 'Dermatologista',
    amount: 250,
    date: new Date(2021, 10, 30),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );
}
