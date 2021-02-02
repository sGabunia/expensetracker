import React from "react";
import "./ExpensesAndIncome.css";

const ExpensesIncome = ({ text, amount, borderRadius }) => {
  return (
    <div className={`spent-earned ${borderRadius}`}>
      <p> {text}</p>
      <p>$ {amount}</p>
    </div>
  );
};

const ExpensesAndIncome = ({ income, expenses }) => {
  return (
    <div className="exp-income">
      <ExpensesIncome text="Earned" amount={expenses} borderRadius="earned" />
      <ExpensesIncome text="Spent" amount={income} borderRadius="spent" />
    </div>
  );
};

export default ExpensesAndIncome;
