// src/components/ExpenseList.jsx
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="card">
      <h2 className="card-title">Expenses</h2>

      {expenses.length === 0 ? (
        <p className="empty-text">No expenses yet. Add one on the left!</p>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={onDeleteExpense}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
