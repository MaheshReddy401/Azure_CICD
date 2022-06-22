import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);
  //   let addNewExpense = false;
  const addExpenseHandler = (expenseData) => {
    const newExpense = { ...expenseData, id: Math.random().toString() };
    props.onNewExpense(newExpense);
    setAddNewExpense(false);
  };

  const newExpenseHandler = () => {
    // addNewExpense = !addNewExpense;
    setAddNewExpense(!addNewExpense);
  };
  const cancelExpenseHandler = () => {
    setAddNewExpense(!addNewExpense);
  };
  return (
    <div className="new-expense">
      {!addNewExpense && (
        
          <button onClick={newExpenseHandler}> Add New Expense</button>
      )}
      {addNewExpense && (
          <ExpenseForm
            onAddExpense={addExpenseHandler}
            onCancelExpense={cancelExpenseHandler}
          ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
