import React, { useState, useMemo } from "react";
import ExpensesAndIncome from "../ExpensesAndIncome/ExpensesAndIncome";
import History from "../History/History";
import Transactions from "../Transactions/Transactions";
import "./Tracker.css";

const Tracker = () => {
  const [transactions, setTransaction] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      setError(true);
      return;
    }
    const newTransaction = { id: Date.now(), type: text, amount };
    setTransaction((prevState) => [...prevState, newTransaction]);
    setError(false);
    setText("");
    setAmount("");
  };

  const income = useMemo(() => {
    return calculateIncome(transactions);
  }, [transactions]);

  const expenses = useMemo(() => {
    return calculateExpenses(transactions);
  }, [transactions]);

  const totalBalance = useMemo(() => {
    return calculateTotal();
  }, [transactions]);

  // calculation functions
  function calculateIncome(data) {
    const income = data
      .filter((d) => d.amount > 0)
      .reduce((acc, item) => acc + item.amount, 0);
    console.log(income);
    return income;
  }

  function calculateExpenses(data) {
    const expenses = data
      .filter((d) => d.amount <= 0)
      .reduce((acc, item) => acc + item.amount, 0);
    console.log(expenses);
    return expenses;
  }

  function calculateTotal() {
    return income + expenses;
  }

  const removeTransaction = (id) => {
    setTransaction(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div>
      <h2>Tolal Balance</h2>
      <span>{totalBalance}</span>
      <ExpensesAndIncome income={income} expenses={expenses} />
      <ul>
        {transactions.map((transaction) => (
          <History
            key={transaction.id}
            {...transaction}
            handleRemove={() => removeTransaction(transaction.id)}
          />
        ))}
      </ul>
      <h2>Add New Transactions</h2>
      <form onSubmit={addTransaction}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={error && `error`}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className={error && `error`}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default Tracker;
