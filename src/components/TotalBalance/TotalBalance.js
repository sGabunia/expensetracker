import React from "react";
import "./TotalBalance.css";

const TotalBalance = ({ balance }) => {
  return (
    <div className="tracker-header">
      <h2>Tolal Balance</h2>
      <span className="total">$ {balance}</span>
    </div>
  );
};

export default TotalBalance;
