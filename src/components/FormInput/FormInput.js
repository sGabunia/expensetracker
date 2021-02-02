import React, { useEffect, useRef } from "react";
import "./FormInput.css";

const FormInput = ({
  handleTransactionType,
  handleTransactionAmount,
  addTransaction,
  error,
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
          onChange={handleTransactionType}
          className={error ? `error` : null}
          placeholder="Transaction type"
          maxLength="25"
        />
        <input
          type="number"
          onChange={handleTransactionAmount}
          className={error ? `error` : null}
          placeholder="Amount (negative - expense, positive -income)"
          maxLength="10"
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default FormInput;
