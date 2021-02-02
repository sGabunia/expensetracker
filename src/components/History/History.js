import React from "react";
import "./History.css";

const History = ({ type, amount, handleRemove }) => {
  return (
    <li className="transaction">
      <p className="type">{type}</p>
      <div>
        <p>$ {amount}</p>

        <img
          src="https://img.icons8.com/carbon-copy/100/000000/filled-trash.png"
          alt="remove icon"
          onClick={handleRemove}
          className="remove"
        />
      </div>
    </li>
  );
};

export default History;
