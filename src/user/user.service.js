const bcrypt = require("bcrypt");
const userRepo = require("./user.repo");

// Create user
const createUser = async ({ fullName, email, password }) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return userRepo.createUser({ fullName, email, password: hashPassword });
};

const loginUser = async (email) => {
  return userRepo.loginUser(email);
};

// Edit User data
const editUser = async ({ userId, fullName, password }) => {
  return userRepo.editUser({ userId, fullName, password });
};

const userService = {
  createUser,
  loginUser,
  editUser,
};

module.exports = userService;
