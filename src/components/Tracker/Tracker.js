import React, { useState, useMemo } from "react";
import ExpensesAndIncome from "../ExpensesAndIncome/ExpensesAndIncome";
import Transactions from "../Transactions/Transactions";
import "./Tracker.css";

const Tracker = () => {
  const [transactions, setTransaction] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = { id: Date.now(), type: text, amount };
    setTransaction((prevState) => [...prevState, newTransaction]);
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

  return (
    <div>
      <h2 style={{ color: "red" }}>Tolal Balance</h2>
      <span>{totalBalance}</span>
      <ExpensesAndIncome income={income} expenses={expenses} />
      <h2>Add New Transactions</h2>
      <form onSubmit={addTransaction}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default Tracker;
