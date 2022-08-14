const { User } = require("../database/models");

// Create User
const createUser = async ({ fullName, email, password }) => {
  return await User.create({
    fullName,
    email,
    password,
  });
};

// Edit User data
const editUser = async ({ userId, fullName, password }) => {
  return await User.update({ fullName, password }, { where: { id: userId } });
};

const userRepo = {
  createUser,
  editUser,
};

module.exports = userRepo;
