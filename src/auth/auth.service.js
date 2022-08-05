const authRepo = require("./auth.repo");

// Check Email / Get user by email
const getUserByEmail = async ({ email }) => {
  return await authRepo.getUserByEmail(email);
};

// generate token

const authService = {
  getUserByEmail,
};

module.exports = authService;
