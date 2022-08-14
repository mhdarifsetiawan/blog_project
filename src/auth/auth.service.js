const authRepo = require("./auth.repo");

// Check Email / Get user by email
const getUserByEmail = async (email) => {
  return await authRepo.getUserByEmail(email);
};

// Get user by id
const getUserById = async (userId) => {
  return await authRepo.getUserById(userId);
};

// generate token

const authService = {
  getUserByEmail,
  getUserById,
};

module.exports = authService;
