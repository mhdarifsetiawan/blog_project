const userService = require("./user.service");

const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const recordUser = await userService.createUser({
      fullName,
      email,
      password,
    });
    return res.json(recordUser);
  } catch (error) {
    return res.status(500).json({ message: "Create user failed!" });
  }
};

const loginUser = async (req, res) => {
  const { email } = req.body;
  const users = await userService.loginUser(email);
  res.json(users);
};

const userController = {
  createUser,
  loginUser,
};

module.exports = userController;
