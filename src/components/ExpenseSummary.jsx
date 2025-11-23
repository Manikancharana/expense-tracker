// src/components/ExpenseSummary.jsx
function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount || 0), 0);

  return (
    <div className="card summary-card">
      <h2 className="card-title">Summary</h2>
      <p className="summary-total">
        Total Spent: <span>₹{total.toFixed(2)}</span>
      </p>
      <p className="summary-count">
        Number of expenses: <span>{expenses.length}</span>
      </p>
    </div>
  );
}

export default ExpenseSummary;
