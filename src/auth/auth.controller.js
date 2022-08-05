require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("./auth.service");

const example = (req, res) => {
  return res.json("Mau ngapain mas?");
};

const chekAuth = async (req, res) => {
  const { email, password } = req.body;
  const existUser = await authService.getUserByEmail({ email });

  //   kalau gak ada email yang terdaftar response not found
  if (!existUser) return res.status(404).json({ message: "User not found" });

  //   kalau ada cek password
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
      { expiresIn: "1d" }
    );

    return res.json({ accessToken: token });
  } else {
    return res.send("Login failed");
  }
};

const authController = {
  example,
  chekAuth,
};

module.exports = authController;
