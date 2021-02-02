import React, { useEffect, useRef } from "react";
import "./FormInput.css";

const FormInput = ({
  handleTransactionType,
  handleTransactionAmount,
  addTransaction,
  error,
  text,
  amount,
  balance,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [balance]);

  return (
    <div>
      <h2>Add New Transactions</h2>
      <form onSubmit={addTransaction}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleTransactionType}
          className={error && `error`}
        />
        <input
          type="number"
          value={amount}
          onChange={handleTransactionAmount}
          className={error && `error`}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default FormInput;
