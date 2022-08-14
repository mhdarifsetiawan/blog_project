const authService = require("../auth/auth.service");
const userService = require("./user.service");

// Create User
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

// Edit User data
const editUser = async (req, res) => {
  const authUser = req.auth;
  const userId = authUser.id;
  const userData = await authService.getUserById(userId);
  const { fullName, password } = req.body;

  if (userId !== userData.id) {
    return res.send("Forbidden");
  } else {
    try {
      const recordUser = await userService.editUser({
        userId,
        fullName,
        password,
      });
      return res.json(recordUser);
    } catch (error) {
      return res.status(500).json({ message: "Edit user failed" });
    }
  }
};

const userController = {
  createUser,
  loginUser,
  editUser,
};

module.exports = userController;
