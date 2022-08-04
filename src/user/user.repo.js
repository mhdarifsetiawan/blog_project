const { User } = require("../database/models");

const createUser = async ({ fullname, email, password }) => {
  return await User.create({
    fullname,
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
};

module.exports = userRepo;
