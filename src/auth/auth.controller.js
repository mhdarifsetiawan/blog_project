require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("./auth.service");

const checkAuth = async (req, res) => {
  const { email, password } = req.body;
  const existUser = await authService.getUserByEmail(email);

  //   ! if email not exixt -> response not found
  if (!existUser) return res.status(404).json({ message: "User not found" });

  //   if email found -> chek password
  const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
  if (isPasswordCorrect) {
    // generate jwt token
    const token = await jwt.sign(
      {
        id: existUser.id,
        fullName: existUser.fullName,
        email: existUser.email,
      },
      process.env.JWT_SECRET_TOKEN,
      { expiresIn: "3d" }
    );

    return res.json({ accessToken: token });
  } else {
    return res.send("Login failed! email/password is invalid");
  }
};

const authController = {
  checkAuth,
};

module.exports = authController;
