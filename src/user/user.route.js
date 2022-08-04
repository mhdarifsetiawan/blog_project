const express = require("express");
const userRouter = express.Router();

const userController = require("./user.controller");

userRouter.post("/user/registration", userController.createUser);
// userRouter.post("/user/login", userController.loginUser);

module.exports = userRouter;
