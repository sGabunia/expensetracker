import React from "react";
import ExpensesAndIncome from "../ExpensesAndIncome/ExpensesAndIncome";
import "./Tracker.css";

const Tracker = () => {
  return (
    <div>
      <h2 style={{ color: "red" }}>Tolal Balance</h2>
      <span>$0.00$</span>
      <ExpensesAndIncome />
    </div>
  );
};

export default Tracker;
