import React, { useState } from "react";
import Transactions from "../Transactions/Transactions";
import "./History.css";

const History = ({ type, amount, handleRemove }) => {
  return (
    <li>
      <p>{type}</p>
      <div>
        <p>{amount}</p>
        <button onClick={handleRemove}>-</button>
      </div>
    </li>
  );
};

export default History;
