import { useState } from "react";

import type { Transaction } from "./types";
import BudgetHeader from "./components/BudgetHeader";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (
    description: string,
    value: number,
    type: "income" | "expense",
  ) => {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      description,
      value,
      type,
      date: new Date(),
    };

    setTransactions([...transactions, newTransaction]);
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.value, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.value, 0);

  const total = totalIncome - totalExpenses;

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <>
      <BudgetHeader
        total={total}
        income={totalIncome}
        expenses={totalExpenses}
      />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </>
  );
}

export default App;
