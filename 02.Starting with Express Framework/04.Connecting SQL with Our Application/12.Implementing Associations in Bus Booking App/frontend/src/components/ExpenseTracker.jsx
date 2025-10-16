import React, { useState, useEffect } from "react";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    category: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    description: "",
    amount: "",
    category: "",
  });

  useEffect(() => {
    window.axios
      .get("http://localhost:3000/expenses")
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.axios
      .post("http://localhost:3000/expenses", newExpense)
      .then((res) => {
        setExpenses([...expenses, res.data]);
        setNewExpense({ description: "", amount: "", category: "" });
      })
      .catch((err) => console.error(err));
  };

  const deleteExpense = (id) => {
    window.axios
      .delete(`http://localhost:3000/expenses/${id}`)
      .then(() => {
        setExpenses(expenses.filter((exp) => exp.id !== id));
      })
      .catch((err) => console.error(err));
  };

  const startEdit = (expense) => {
    setEditingId(expense.id);
    setEditForm({
      description: expense.description,
      amount: expense.amount,
      category: expense.category,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ description: "", amount: "", category: "" });
  };

  const saveEdit = (id) => {
    window.axios
      .put(`http://localhost:3000/expenses/${id}`, editForm)
      .then((res) => {
        setExpenses(expenses.map((exp) => (exp.id === id ? res.data : exp)));
        setEditingId(null);
        setEditForm({ description: "", amount: "", category: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      {/* Add Expense Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) =>
            setNewExpense({ ...newExpense, description: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={newExpense.category}
          onChange={(e) =>
            setNewExpense({ ...newExpense, category: e.target.value })
          }
          required
        />
        <button type="submit" className="add-btn">
          Add Expense
        </button>
      </form>

      {/* List of Expenses */}
      <ul className="expense-list">
        {expenses.map((exp) => (
          <li key={exp.id} className="expense-item">
            {editingId === exp.id ? (
              <div className="expense-edit-form">
                <input
                  type="text"
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editForm.amount}
                  onChange={(e) =>
                    setEditForm({ ...editForm, amount: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editForm.category}
                  onChange={(e) =>
                    setEditForm({ ...editForm, category: e.target.value })
                  }
                />
                <button
                  className="update-btn"
                  type="button"
                  onClick={() => saveEdit(exp.id)}
                >
                  Save
                </button>
                <button
                  className="delete-btn"
                  type="button"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="expense-item-content">
                <span>
                  {exp.description} - ${exp.amount} [{exp.category}]
                </span>
                <div>
                  <button
                    className="update-btn"
                    type="button"
                    onClick={() => startEdit(exp)}
                  >
                    ✏️
                  </button>
                  <button
                    className="delete-btn"
                    type="button"
                    onClick={() => deleteExpense(exp.id)}
                  >
                    ❌
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
