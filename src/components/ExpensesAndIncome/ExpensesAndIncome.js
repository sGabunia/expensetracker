import React from "react";
import "./ExpensesAndIncome.css";

const ExpensesIncome = ({ text, amount }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{amount}</p>
    </div>
  );
};

const ExpensesAndIncome = ({ income, expenses }) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <ExpensesIncome text="Spent" amount={income} />
      <ExpensesIncome text="Earned" amount={expenses} />
    </div>
  );
};

export default ExpensesAndIncome;
