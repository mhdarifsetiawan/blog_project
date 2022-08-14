const { User } = require("../database/models");

// Get user by email
const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email }, raw: true });
};

// Get user by id
const getUserById = async (userId) => {
  return await User.findOne({ where: { id: userId }, raw: true });
};

const authRepo = {
  getUserByEmail,
  getUserById,
};

module.exports = authRepo;
