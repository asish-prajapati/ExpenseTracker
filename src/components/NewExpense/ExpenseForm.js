import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setuserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const [invalidTitle, setInvalidTitle] = useState(false);
  const [invalidAmount, setInvalidAmount] = useState(false);

  const changeHandler = (event) => {
    setuserInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
    if (userInput.enteredTitle.length > 0) {
      setInvalidTitle(false);
    }
    if (userInput.enteredAmount > 0) {
      setInvalidAmount(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userInput.enteredTitle.length === 0) {
      setInvalidTitle(true);
      return;
    }
    if (+userInput.enteredAmount === 0) {
      setInvalidAmount(true);
      return;
    }

    const ExpenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(ExpenseData);
    setuserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    props.changeVisibility();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div
          className={`new-expense__control ${invalidTitle ? "invalid" : ""}`}
        >
          <label htmlFor="enteredTitle">Title</label>
          <input
            value={userInput.enteredTitle}
            name="enteredTitle"
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div
          className={`new-expense__control ${invalidAmount ? "invalid" : ""}`}
        >
          <label htmlFor="enteredAmount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            name="enteredAmount"
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredDate">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            name="enteredDate"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.changeVisibility}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
