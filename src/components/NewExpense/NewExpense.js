import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [formVisibility, setformVisibility] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.AddExpense(expenseData);
  };
  const changeVisibility = () => {
    setformVisibility((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {formVisibility && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          changeVisibility={changeVisibility}
        />
      )}
      {!formVisibility && (
        <button onClick={changeVisibility}>Add Expenses</button>
      )}
    </div>
  );
}

export default NewExpense;
