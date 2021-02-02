import React from "react";
import "./ExpensesAndIncome.css";

const ExpensesIncome = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
      <p>$0</p>
    </div>
  );
};

const ExpensesAndIncome = () => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <ExpensesIncome text="Spent" />
      <ExpensesIncome text="Earned" />
    </div>
  );
};

export default ExpensesAndIncome;
