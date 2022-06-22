import React, { useState } from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DEFAULT_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper 2",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);
  const addNewExpenseHandler = (expenseData) => {
    setExpenses(prevExpense => {
      return [expenseData, ...prevExpense];
    });
    console.log(expenseData);
  };
  return (
    <div>
      <NewExpense onNewExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
