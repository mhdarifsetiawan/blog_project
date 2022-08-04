const bcrypt = require("bcrypt");
const userRepo = require("./user.repo");

const createUser = async ({ fullName, email, password }) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return userRepo.createUser({ fullName, email, password: hashPassword });
};

const loginUser = async (email) => {
  return userRepo.loginUser(email);
};

const userService = {
  createUser,
  loginUser,
};

module.exports = userService;
