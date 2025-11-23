// src/components/ExpenseItem.jsx
function ExpenseItem({ expense, onDelete }) {
  const { id, title, amount, category, date } = expense;

  return (
    <div className="expense-item">
      <div>
        <h3 className="expense-title">{title}</h3>
        <p className="expense-meta">
          <span className="expense-category">
            {category || "Other"}
          </span>{" "}
          •{" "}
          <span className="expense-date">
            {date || "No date"}
          </span>
        </p>
      </div>

      <div className="expense-right">
        <span className="expense-amount">₹{amount}</span>
        <button className="btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
