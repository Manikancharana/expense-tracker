// src/components/ExpenseForm.jsx
// src components 
import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Please fill title, amount, and date");
      return;
    }

    const newExpense = {
      title: title.trim(),
      amount: parseFloat(amount),
      category: category.trim() || "Other",
      date,
    };

    onAddExpense(newExpense);

    // reset form
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="card">
      <h2 className="card-title">Add New Expense</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Title</label>
          <input
            type="text"
            placeholder="e.g. Coffee, Bus ticket"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Amount (₹)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Category</label>
          <input
            type="text"
            placeholder="Food, Travel, Bills..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="btn-primary" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
