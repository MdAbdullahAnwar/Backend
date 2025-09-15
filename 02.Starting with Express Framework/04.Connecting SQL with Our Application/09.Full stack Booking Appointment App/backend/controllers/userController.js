const User = require("../models/User");

// Add User
const addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = await User.create({ name, email, phone });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

// Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
    addUser,
    getUsers,
    deleteUser
}
