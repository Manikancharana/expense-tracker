// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./index.css";

function App() {
  // Initial dummy data (optional)
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: 1500,
      category: "Food",
      date: "2025-11-20",
    },
    {
      id: 2,
      title: "Internet Bill",
      amount: 800,
      category: "Utilities",
      date: "2025-11-18",
    },
  ]);

  // Add a new expense
  const handleAddExpense = (expense) => {
    setExpenses((prev) => [
      ...prev,
      { ...expense, id: Date.now() }, // simple unique id
    ]);
  };

  // Delete expense
  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="left-panel">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseSummary expenses={expenses} />
        </section>

        <section className="right-panel">
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
