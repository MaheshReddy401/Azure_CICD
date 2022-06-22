import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  // const expenses = props.items;
  const contentRendered = (
    <h2 className="expenses-list__fallback">No Expenses Found</h2>
  );
  if (props.items.length === 0) return contentRendered;
  return props.items.map((expense) => {
    return (
      <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    );
  });
};

export default ExpenseList;
