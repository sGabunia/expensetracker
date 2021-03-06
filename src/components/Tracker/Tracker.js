import React, { useState, useMemo } from "react";
import TotalBalance from "../TotalBalance/TotalBalance";
import ExpensesAndIncome from "../ExpensesAndIncome/ExpensesAndIncome";
import FormInput from "../FormInput/FormInput";
import History from "../History/History";

import "./Tracker.css";

const Tracker = () => {
  const [transactions, setTransaction] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);

  // add transaction
  const addTransaction = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (!text || !amount) {
      setError(true);
      return;
    }
    const newTransaction = { id: Date.now(), type: text, amount };
    setTransaction((prevState) => [...prevState, newTransaction]);
    setError(false);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  // remove transaction
  const removeTransaction = (id) => {
    setTransaction(transactions.filter((transaction) => transaction.id !== id));
  };

  // income, expenses and total with useMemo
  const income = useMemo(() => {
    return calculateIncome(transactions);
  }, [transactions]);

  const expenses = useMemo(() => {
    return calculateExpenses(transactions);
  }, [transactions]);

  const totalBalance = useMemo(() => {
    console.log("memo");
    return calculateTotal(income, expenses);
  }, [income, expenses]);

  // calculation functions
  function calculateIncome(data) {
    const income = data
      .filter((d) => d.amount > 0)
      .reduce((acc, item) => acc + item.amount, 0);
    return income;
  }

  function calculateExpenses(data) {
    const expenses = data
      .filter((d) => d.amount <= 0)
      .reduce((acc, item) => acc + item.amount, 0);
    return expenses;
  }

  function calculateTotal(income, expenses) {
    return income + expenses;
  }

  return (
    <div className="tracker">
      <TotalBalance balance={totalBalance} />

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

      <FormInput
        addTransaction={addTransaction}
        handleTransactionType={(e) => setText(e.target.value)}
        handleTransactionAmount={(e) => setAmount(Number(e.target.value))}
        error={error}
        balance={totalBalance}
      />
    </div>
  );
};

export default Tracker;
