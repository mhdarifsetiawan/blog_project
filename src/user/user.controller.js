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

// Edit User data
const editUser = async (req, res) => {
  const { userId } = req.params;
  // const userData = await authService.getUserById(userId);
  const { fullName, password } = req.body;

  if (req.auth.id !== userId) {
    return res
      .status(403)
      .json({ message: "You don't have access to this action!" });
  } else {
    try {
      const recordUser = await userService.editUser({
        userId,
        fullName,
        password,
      });
      return res
        .status(200)
        .json({ message: "Modified successfully!", recordUser });
    } catch (error) {
      return res.status(500).json({ message: "Edit user failed" });
    }
  }
};

const userController = {
  createUser,
  editUser,
};

module.exports = userController;
