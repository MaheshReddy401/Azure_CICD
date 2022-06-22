import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [expenseFilter, setExpenseFilter] = useState("2020");
  const expenseFilterChageHandler = (expenseFilterData) => {
    setExpenseFilter(expenseFilterData);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseFilter
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={expenseFilter}
          onExpenseFilterChange={expenseFilterChageHandler}
        />
       <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
