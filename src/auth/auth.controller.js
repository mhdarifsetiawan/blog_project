require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("./auth.service");

const checkAuth = async (req, res) => {
  const { email, password } = req.body;
  const existUser = await authService.getUserByEmail(email);

  //   ! if email not exixt -> response not found
  if (!existUser)
    // if user not found, error 400 with message invalid email/password
    return res.status(400).json({ message: "Invalid email/password!" });

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
    return res.status(400).send({ message: "Invalid email/password!" });
  }
};

const authController = {
  checkAuth,
};

module.exports = authController;
