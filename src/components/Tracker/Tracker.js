import React, { useState, useMemo } from "react";
import ExpensesAndIncome from "../ExpensesAndIncome/ExpensesAndIncome";
import FormInput from "../FormInput/FormInput";
import History from "../History/History";
import TrackerHeader from "../TrackerHeader/TrackerHeader";
import Transactions from "../Transactions/Transactions";
import "./Tracker.css";

const Tracker = () => {
  const [transactions, setTransaction] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);

  // add transaction
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

  // remove transaction
  const removeTransaction = (id) => {
    setTransaction(transactions.filter((transaction) => transaction.id !== id));
  };

  // income, expenses and total
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

  return (
    <div>
      <TrackerHeader balance={totalBalance} />
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
        text={text}
        amount={amount}
        error={error}
        balance={totalBalance}
      />
    </div>
  );
};

export default Tracker;
