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
      <h3>Add New Transactions</h3>
      <form onSubmit={addTransaction}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleTransactionType}
          className={error ? `error` : null}
          placeholder="Transaction type"
        />
        <input
          type="number"
          value={amount}
          onChange={handleTransactionAmount}
          className={error ? `error` : null}
          placeholder="Amount (negative - expense, positive -income)"
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default FormInput;
