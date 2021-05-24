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
    props.onAddExpense(expenseData);
  };
  const visibilityOn = () => {
    setformVisibility(true);
  };
  const visibilityOff = () => {
    setformVisibility(false);
  };
  return (
    <div className="new-expense">
      {formVisibility && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          handleVisibilityOff={visibilityOff}
        />
      )}
      {!formVisibility && <button onClick={visibilityOn}>Add Expenses</button>}
    </div>
  );
}

export default NewExpense;
