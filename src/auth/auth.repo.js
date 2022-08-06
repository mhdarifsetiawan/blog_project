const { User } = require("../database/models");

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email }, raw: true });
};

const authRepo = {
  getUserByEmail,
};

module.exports = authRepo;
