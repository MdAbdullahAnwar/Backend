const Expense = require('../models/Expense');

// CREATE
const createExpense = async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    const expense = await Expense.create({ description, amount, category });
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, category } = req.body;
    const expense = await Expense.findByPk(id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    expense.description = description;
    expense.amount = amount;
    expense.category = category;
    await expense.save();
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Expense.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createExpense, getExpenses, updateExpense, deleteExpense };
