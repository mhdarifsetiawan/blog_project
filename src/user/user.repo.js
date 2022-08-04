const { User } = require("../database/models");

const createUser = async ({ fullName, email, password }) => {
  return await User.create({
    fullName,
    email,
    password,
  });
};

// login
const loginUser = async (email, password) => {
  return await User.findOne({
    where: { email: email, password: password },
  });
};

const userRepo = {
  createUser,
  loginUser,
};

module.exports = userRepo;
